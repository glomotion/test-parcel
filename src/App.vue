<template>
  <div id="app" class="app">
    <h1>Hello {{ title }} 🚀</h1>
    <p>📦 Parcel Vue.js Example</p>
    <router-link to="/a"/>
      goto: a
    </router-link> |
    <router-link :to="{ name: 'b' }"/>
      goto: b
    </router-link>
    <router-view></router-view>
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
    color: #333333;
    margin-top: 60px;
    background-color: rebeccapurple;

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

</style>
