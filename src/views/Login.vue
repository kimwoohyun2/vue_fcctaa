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
  <div>
    <input name="id" v-model="id" placeholder="아이디" type="text" />
    <input name="pw" v-model="pw" placeholder="비밀번호" type="password" />
    <button @click="clickLogin">로그인</button>
  </div>
</template>

<script>
// import axios from 'axios';
// axios를 임포트해서쓰지 말고 아래와 같이 api로 쓸 것
// 이유는 인터셉터 등 설정이 되어 있기 때문이다.
import api from '@/api';

export default {
  name: 'Login',

  data() {
    return {
      id: '',
      pw: '',
    };
  },

  computed: {},

  created() {},

  methods: {
    async clickLogin() {
      // let formdata = new FormData();

      // formdata.append("name", this.id);
      // formdata.append("id", this.id);
      // formdata.append("pw", this.pw);

      // formdata.set("name", this.id);
      // formdata.set("id", this.id);
      // formdata.set("pw", this.pw);

      console.log('>>>>>>>>>>>>>>>>>>>>>>  Login.vue  48');
      console.log(this.id);
      console.log(this.pw);

      // console.log(">>>>>>>>>>>>>>>>>>>>>>  Login.vue  58");
      // console.log(formdata.get("id"));
      // console.log(formdata.get("pw"));

      const fd = {
        id: this.id,
        pw: this.pw,
      };

      try {
        // (참고) api 호출 시 팁
        // 1. vue.config.js 에서 proxy 설정되어 있는 것을 고려할 것.
        const rtn1 = await api.post('/api/login2', fd);

        // axios({
        //   method: "post",
        //   url: "http://localhost:5050/login2",
        //   data: fd,
        //   headers: { "Content-Type": "multipart/form-data" },
        // });

        // const rtn1 = await axios.post("http://localhost:5050/login2", formdata, {
        //   header: { "Context-Type": "multipart/form-data" },
        // });

        console.log('>>>>>>>>>>>>>>>>>>>>>>  Login.vue  76');
        console.log(rtn1.data.token);

        if (!rtn1.data.token) {
          return;
        }

        // this.$cookies.set('kb_fcctaa_vue_token', rtn1.data.token);
        sessionStorage.setItem('kb_fcctaa_vue_token', rtn1.data.token);

        // 스토어의 getters에 isAuthorized가 true이면 로그인상태라고 여기기로 한다.
        // 왜냐하면 로그아웃 시에 스토어의 token값을 초기화하기 때문이다. (2022.06.04)
        this.$store.dispatch('common/setLoginYnToken', rtn1.data.token);

        // this.$store.dispatch('common/setToken', rtn1.data.token);

        console.log('>>>>>>>>>>>>>>>>>>>>>>  Login.vue  81');
        // console.log(this.$store.state.common.token);
        // const tmp = this.$cookies.get('kb_fcctaa_vue_token');
        // console.log(tmp);

        console.log('>>>>>>>>>>>>>>>>>>>>>>  Login.vue  99');
        console.log(this.$store);
        console.log('>>>>>>>>>>>>>>>>>>>>>>  Login.vue  101');
        console.log(this.$store.getters['common/isAuthorized']);

        this.$router.push('/');
      } catch (err) {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Login.vue  err  101');
      }
    },
  },
};
</script>

<style></style>
