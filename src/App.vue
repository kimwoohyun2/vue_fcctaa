<!-- 
*************************************************************************
* 이름:
*
* 설명:
*
* 참고:
*
*
**************************************************************************
-->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {},

  created() {},

  mounted() {
    // vue 앱이 처음 시작될 때 로그인 토큰이 세션스토리지에 저장되어 있으면
    // 가져와서 vuex에 넣어준다. (2022.06.04)
    //  -> 이유는 새로고침시에 로그인 상태가 유지되게 하기 위해서이다.
    //     (2022.06.04)
    // const savedToken = this.$cookies.get('kb_fcctaa_vue_token');
    const savedToken = sessionStorage.getItem('kb_fcctaa_vue_token');
    if (savedToken) {
      this.$store.dispatch('common/setLoginYnToken', savedToken);
    }
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>  App.vue  31');
    console.log(this.$store.state.common.loginYnToken);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
