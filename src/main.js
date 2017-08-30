// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import Vue from 'vue'
import { routes } from './router/routes'
import VueRouter from 'vue-router'

let vueScrollTo = require('vue-scroll-to')
Vue.use(vueScrollTo)

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
