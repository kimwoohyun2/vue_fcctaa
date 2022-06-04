import axios from 'axios';

const api = axios.create();

api.interceptors.request.use(
  function (request) {
    // const token = Vue.$cookies.get('kb_fcctaa_vue_token');
    const token = sessionStorage.getItem('kb_fcctaa_vue_token');
    // 로그인유무토큰이 세션스토리지에 저장되어 있으면 http request 헤더에
    // 토큰을 실어서 보낸다. (2022.06.01)
    if (token) {
      request.headers.authorization = token;
    }
    return request;
  },
  function (error) {
    //sendErrorReport(error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    //sendErrorReport(error);
    return Promise.reject(error);
  },
);

export default api;
