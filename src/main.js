// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/dist/css/bootstrap.min.css'
import VeeValidate from 'vee-validate'
import App from './App'
import Vue from 'vue'
import { routes } from './router/routes'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

Vue.use(VeeValidate)
Vue.use(VueResource)
Vue.use(VueToastr)

Vue.use(VueToastr, {
  position: 'toast-top-right',
  defaultType: 'success',
  defaultTimeout: 10000,
  closeBtn: true
})

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

let VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 800,
  easing: 'ease',
  offset: -118,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: true,
  y: false
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

