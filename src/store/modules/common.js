// ***********************************************************************************
// * 이름:
// *
// * 설명:
// *
// * 참고:
// *
// *
// ***********************************************************************************

const common = {
  namespaced: true,

  state: {
    // 로그인 토큰
    loginYnToken: '',
  },

  getters: {
    // 로그인 토큰
    loginYnToken: (state) => state.loginYnToken,
    // 로그인 유무
    isAuthorized: (state) => !!state.loginYnToken,
  },

  actions: {
    // 로그인 토큰을 세팅한다.
    setLoginYnToken: ({ commit }, payload) => {
      commit('SET_LOGIN_YN_TOKEN', payload);
    },
  },

  mutations: {
    // 로그인 토큰을 세팅한다.
    SET_LOGIN_YN_TOKEN: (state, payload) => {
      state.loginYnToken = payload;
    },
  },
};

export default common;
