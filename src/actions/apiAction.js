import fetch from 'isomorphic-fetch';
import assign from 'lodash.assign';

import { CookieStore, Const } from '../utils';
import { SERVER_URL } from '../constants';

let removeEmptyPair = function (params) {
  params = params || {};
  let newObj = {};
  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined &&
        params[key] !== '' &&
        params[key] !== null
    ) {
      newObj[key] = params[key];
    }
  });
  return newObj;
};

// 用于替换接口 url 中的参数，比如：
//   path = '/category/:id/posts'
//   params = { id: 5, tag: 'kid' }
//   => '/category/5/posts?tag=kid'
//   => {}
let assembleUrl = function (path, params, method) {
  path = path || '';
  params = params || {};
  params = removeEmptyPair(params);
  method = method ? method.toLowerCase() : 'get';
  Object.keys(params).forEach((key) => {
    let _path = path.replace(`:${key}`, params[key]);
    if (_path === path) {
      if (method === 'get') {
        if (_path.indexOf('?') === -1) {
          _path = `${_path}?${key}=${params[key]}`;
        } else {
          _path = `${_path}&${key}=${params[key]}`;
        }
        delete params[key];
      }
    } else {
      delete params[key];
    }
    path = _path;
  });
  return path;
};

// 接口辅助方法, 返回 接口 操作 action
// _state 将会覆盖默认的 state
export default function (apiConfig = {}) {
  apiConfig.formatter = apiConfig.formatter || 'normal';

  // 请求数据
  let request = function (params) {
    return {
      type: Const(`REQUEST_${params._state || apiConfig.state}`),
      params
    };
  };

  // 收到数据
  let recieve = function (params, data) {
    return assign({}, {
      params,
      type: Const(`RECIEVE_${params._state || apiConfig.state}`),
      receivedAt: new Date()
    }, data);
  };

  return function (params, headers, settings) {
    params = params || {};
    settings = settings || {};
    // 返回 dispatcher
    return function (dispatch) {
      dispatch(request(params));

      let csrfParam = CookieStore.get('csrf_param');
      let csrfToken = CookieStore.get('csrf_token');

      let data = params;

      // 添加 csrf 支持
      if (csrfParam) {
        if (~['put', 'post', 'delete'].indexOf(apiConfig.method)) {
          if (data instanceof FormData) {
            data.append(csrfParam, csrfToken);
          } else {
            data = assign({ [csrfParam]: csrfToken }, data);
          }
        }
      }

      let accessToken = CookieStore.get('token');

      let method = (apiConfig.method || 'get').toUpperCase();

      let url = assembleUrl(apiConfig.url, data, method);

      headers = assign({}, apiConfig.headers, headers);

      if (accessToken && !apiConfig.withoutToken) {
        headers = assign({
          'authorization': 'Bearer ' + accessToken,
          'access_token': accessToken
        }, headers);
      }

      if (!(data instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
      }

      let ajaxSettings = assign({}, settings, {
        method: method,
        // credentials: 'true',
        headers: headers
      });


      if (method !== 'GET' && method !== 'HEAD') {
        ajaxSettings.body = data instanceof FormData ? data : JSON.stringify(data);
      }

      let jsonResponse = function (response) {
        if (response && (response.status === 401 || response.status === 403)) {
          return {
            head: {
              retFlag: 401,
              retMsg: '没有访问权限'
            }
          };
        }
        return response.json();
      };
      return fetch(
        url,
        ajaxSettings
      ).then(jsonResponse)
        .then((data) => {
          dispatch(recieve(params, data));
          return data;
        }).catch((data) => {
          return {
            head: {
              retFlag: '99999',
              retMsg: '请求错误'
            }
          };
        });
    };
  };
}
