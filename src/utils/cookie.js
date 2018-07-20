import Cookies from 'js-cookie';
import { Const } from './index.js';

const COOKIE_PREFIX = '_gouhua_';

const keyWithPrefix = (key) => (
  `${COOKIE_PREFIX}${key || ''}`
);

export default class CookieStore {
  static set (key, value, options) {
    let inFifteenMinutes = new Date(new Date().getTime() + Const('COOKIE_EXPIRE'));
    key = keyWithPrefix(key);
    value = value !== undefined ? value : '';
    options = options || { expires: inFifteenMinutes };
    Cookies(key, value, options);
  }

  static get (key) {
    key = keyWithPrefix(key);
    return Cookies.get(key);
  }

  static exists (key) {
    key = keyWithPrefix(key);
    return !!Cookies.get(key);
  }

  static getRaw (key) {
    return Cookies.get(key);
  }

  static setRaw (key, value, options) {
    Cookies.set(key, value, options);
  }
}
