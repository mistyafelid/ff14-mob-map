// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import routes from './router/'
import _store from './store/'
import App from './App'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

const router = new VueRouter(routes)
const store = new Vuex.Store(_store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
