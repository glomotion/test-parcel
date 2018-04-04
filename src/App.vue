<template>
  <div id="app" class="app">
    <h1>Hello {{ title }} 🚀</h1>
    <p>📦 Parcel Vue.js Example</p>
    <router-link to="/a">goto: a</router-link>
    |
    <router-link to="/b">goto: b</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Vue.js'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
  margin-top: 60px;
  background-color: rebeccapurple; /*test for postcss syntax*/

  /*test for postcss syntax*/
  & .a {
    background-color: yellowgreen;
  }

  & .b {
    background-color: gold;
  }
}

h1 {
  font-weight: lighter;
  color: #42b983;
}

#app a {
  color: gold;
}
</style>
