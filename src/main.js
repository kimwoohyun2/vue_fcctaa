// ***********************************************************************************
// * 이름: src/main.js
// *
// * 설명:
// *
// * 참고:
// *
// *
// ***********************************************************************************

import Vue from 'vue';
import router from '@/router/index.js';
import store from '@/store/index.js';
import App from './App.vue';
// import vueCookies from 'vue-cookies';
import * as global from '@/utils/global.js';
import * as functionList from '@/utils/functionList.js';

Vue.config.productionTip = false;

// 1. 미들웨어 등록 및 설정을 한다.  ---------------------------------------------
// 쿠키 대신 세션스토리지를 사용하기로 한다. (2022.06.04)
// Vue.use(vueCookies);

// 쿠키의 만료기간은 7일로 한다.
// Vue.$cookies.config('7d');

// 2. 공통 함수들을 vue.prototype에 세팅한다.  -----------------------------------
Object.keys(global).forEach((key) => {
  Object.defineProperty(Vue.prototype, `$${key}`, { value: global[key] });
});
Object.keys(functionList).forEach((key) => {
  Object.defineProperty(Vue.prototype, `$${key}`, { value: functionList[key] });
});

// 3. 쿠키에 저장된 로그인 토큰이 있으면 vuex에 넣는다.  --------------------------
// function init() {
//   const savedToken = vueCookies.get('kb_fcctaa_vue_token');
//   if (savedToken) {
//     const rtn = store.dispatch('common/setLoginYnToken', savedToken);
//     return rtn;
//   } else {
//     return Promise.resolve();
//   }
// }

// 4. vue 인스턴스를 생성한다.  --------------------------------------------------
// init().then(() => {
window.vmForFccTaaProject = new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
// });
