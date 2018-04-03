import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

const a = () => import('./a')
const b = () => import('./b')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/a',
      name: 'a',
      component: a
    },
    {
      path: '/b',
      name: 'b',
      component: b
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
