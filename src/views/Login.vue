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
    <input type="text" name="id" v-model="id" placeholder="아이디" />
    <input type="password" name="pw" v-model="pw" placeholder="비밀번호" />
    <button @click="clickLogin">로그인</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",

  data() {
    return {
      id: "",
      pw: "",
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

      console.log(">>>>>>>>>>>>>>>>>>>>>>  Login.vue  54");
      console.log(this.id);
      console.log(this.pw);

      // console.log(">>>>>>>>>>>>>>>>>>>>>>  Login.vue  58");
      // console.log(formdata.get("id"));
      // console.log(formdata.get("pw"));

      const fd = {
        id: this.id,
        pw: this.pw,
      };

      const rtn1 = await axios.post("http://localhost:5050/login2", fd);

      // axios({
      //   method: "post",
      //   url: "http://localhost:5050/login2",
      //   data: fd,
      //   headers: { "Content-Type": "multipart/form-data" },
      // });

      // const rtn1 = await axios.post("http://localhost:5050/login2", formdata, {
      //   header: { "Context-Type": "multipart/form-data" },
      // });

      console.log(">>>>>>>>>>>>>>>>>>>>>>  Login.vue  76");
      console.log(rtn1);
    },
  },
};
</script>

<style></style>
