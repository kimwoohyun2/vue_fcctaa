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
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  props: {
    msg: String,
  },

  async created() {
    // await this.tmpFunc();
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>  HelloWorld.vue  44");
  },

  methods: {
    async tmpFunc() {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
