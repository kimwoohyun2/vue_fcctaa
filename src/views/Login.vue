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
import axios from 'axios';

export default {
  name: 'Login',

  data() {
    return {
      id: '',
      pw: '',
    };
  },

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

      // (참고) api 호출 시 팁
      // 1. vue.config.js 에서 proxy 설정되어 있는 것을 고려할 것.
      const rtn1 = await axios.post('/api/login2', fd);

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
      console.log(rtn1);
    },
  },
};
</script>

<style></style>
