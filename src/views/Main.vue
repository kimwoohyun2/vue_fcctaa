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
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /><br /><br />

    <button @click="disconnect" v-if="status === 'connected'">연결끊기</button>
    <button @click="connect" v-if="status === 'disconnected'">연결</button
    ><br /><br />

    {{ status }} <br /><br />

    <div v-if="status === 'connected'">
      <input v-model="message" />
      <button type="submit" @click="sendMessage">메세지 전송</button>
      <ul id="logs">
        <li v-for="(log, index) in logs" :key="index" class="log">
          {{ log.event }}: {{ log.data }}
        </li>
      </ul>
    </div>
    <br /><br />

    <button v-show="!isAuthorized" @click="clickLogin">로그인</button>
    <button v-show="isAuthorized" @click="clickLogout">로그아웃</button>
    <br /><br />

    <button @click="clickSignup">회원가입</button>
    <br /><br />

    <button @click="checkLoginYn">로그인여부체크</button>
    <br /><br />

    <button @click="test2">테스트2</button>
    <br /><br />

    <button @click="testgojs">테스트 gojs</button>
  </div>
</template>

<script>
// axios를 임포트해서쓰지 말고 아래와 같이 api로 쓸 것
// 이유는 인터셉터 등 설정이 되어 있기 때문이다.
import api from '@/api';
import HelloWorld from '@/components/HelloWorld.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Main',

  components: {
    HelloWorld,
  },

  data() {
    return {
      message: '',
      logs: [],
      status: 'disconnected',
    };
  },

  computed: {
    ...mapGetters({
      isAuthorized: 'common/isAuthorized',
    }),
  },

  async created() {
    // 공통함수 설정 테스트 (start)  ----------------------------------------------------------
    console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  84');
    console.log(this.$isIe());
    console.log(this.$isMobile());
    // 공통함수 설정 테스트 (end)  ----------------------------------------------------------

    // axios 테스트 (start)  ----------------------------------------------------------
    const rtn = await api.get('https://jsonplaceholder.typicode.com/todos/');

    console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  92');
    console.log(rtn);
    // axios 테스트 (end)    ----------------------------------------------------------
  },

  methods: {
    connect() {
      this.socket = new WebSocket('wss://echo.websocket.org');
      this.socket.onopen = () => {
        this.status = 'connected';
        this.logs.push({
          event: '연결 완료: ',
          data: 'wss://echo.websocket.org',
        });

        this.socket.onmessage = ({ data }) => {
          this.logs.push({ event: '메세지 수신', data });
        };
      };
    },

    disconnect() {
      this.socket.close();
      this.status = 'disconnected';
      this.logs = [];
    },

    sendMessage() {
      this.socket.send(this.message);
      this.logs.push({ event: '메시지 전송', data: this.message });
      this.message = '';
    },

    // 로그인 유무 체크
    async checkLoginYn() {
      // axios interceptors 설정에서 저장된 토큰이 있을시에는
      // request header에 토큰을 실어서 보내게끔 설정되어 있으니 참고할 것. (2022.06.01)
      const rtn1 = await api.get('/api/logincheck');

      console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  147');
      console.log(rtn1);
    },

    async test2() {
      // const rtn2 = await api.get('http://localhost:5050/api/prod');
      const rtn2 = await api.get('/api/prod');
      // const rtn2 = await api.get('/tmp');

      console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  151');
      console.log(rtn2);
    },

    async clickLogin() {
      console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  169');

      this.$router.push('/login');
    },

    async clickLogout() {
      console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  186');

      // 로그아웃 시에는 쿠키에 저장된 토큰을 삭제하고 스토어의 토큰도 초기화 한다.
      // (2022.06.04)
      // this.$cookies.remove('kb_fcctaa_vue_token');
      // 로그아웃 시에는 세션스토리지에 저장된 토큰을 삭제하고 스토어의 토큰도 초기화 한다.
      sessionStorage.removeItem('kb_fcctaa_vue_token');
      this.$store.dispatch('common/setLoginYnToken', '');
    },

    async clickSignup() {
      console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  205');

      this.$router.push('/signup');
    },

    async testgojs() {
      console.log('>>>>>>>>>>>>>>>>>>>>>>  Start.vue  213');

      this.$router.push('/testgojswordcloud');
    },
  },
};
</script>

<style></style>
