import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
