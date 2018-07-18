import apiAction from './apiAction' ;
// 本地测试
// const APIURI = 'http://192.168.164.48:8180';  
// 远程测试服务器
const APIURI = 'http://10.164.194.121';
// 发现
export const getDiscoveryPageContent = apiAction({
  method: 'post',
  url: `${APIURI}/app/appmanage/discovery/pageByDiscoveryType`,
  state: 'GET_DISCOVERY_CONTENT'
});

// 贷款攻略
export const getLoanPageContent = apiAction({
  method: 'post',
  url: `${APIURI}/app/appmanage/loanstrategy/pageByShowStyle`,
  state: 'GET_LOAN_CONTENT'
});

