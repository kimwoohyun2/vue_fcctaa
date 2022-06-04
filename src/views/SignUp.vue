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
    <select v-model="selectedRole">
      <option v-for="(item, index) in roleArr" :key="index">
        {{ item }}
      </option>
    </select>
    <input type="text" name="id" v-model="id" placeholder="아이디" />
    <input type="password" name="pw" v-model="pw" placeholder="비밀번호" />

    <br />
    <br />

    <button @click="clickSignUp">회원가입</button>
  </div>
</template>

<script>
// import axios from 'axios';
// axios를 임포트해서쓰지 말고 아래와 같이 api로 쓸 것
// 이유는 인터셉터 등 설정이 되어 있기 때문이다.
import api from '@/api';

export default {
  name: 'SignUp',

  data() {
    return {
      id: '',
      pw: '',
      roleArr: ['admin', 'user'],
      selectedRole: '',
    };
  },

  watch: {
    selectedRole() {
      console.log('>>>>>>>>>>>>>>>>>>>>>>  SignUp.vue  50');
      console.log(this.selectedRole);
    },
  },

  created() {},

  methods: {
    async clickSignUp() {
      console.log('>>>>>>>>>>>>>>>>>>>>>>  SignUp.vue  48');
      console.log(this.id);
      console.log(this.pw);

      const fd = {
        id: this.id,
        pw: this.pw,
        role: this.selectedRole,
      };

      const rtn1 = await api.post('http://localhost:5050/signup', fd);

      // axios({
      //   method: "post",
      //   url: "http://localhost:5050/login2",
      //   data: fd,
      //   headers: { "Content-Type": "multipart/form-data" },
      // });

      // const rtn1 = await axios.post("http://localhost:5050/login2", formdata, {
      //   header: { "Context-Type": "multipart/form-data" },
      // });

      console.log('>>>>>>>>>>>>>>>>>>>>>>  SignUp.vue  76');
      console.log(rtn1);
      alert(rtn1.data.msg);
      this.$router.push('/');
    },
  },
};
</script>

<style></style>
