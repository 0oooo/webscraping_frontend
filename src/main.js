import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import AllPage from './components/AllPage'
import SearchPage from './components/SearchPage'
import TodayPage from './components/TodayPage'
import MoviePage from './components/MoviePage'

Vue.use(VueRouter)
Vue.config.productionTip = false



const routes = [
  { path: '/today', component: TodayPage },
  { path: '/search', component: SearchPage },
  { path: '/all', component: AllPage },
  { path: '/movie/:id', component: MoviePage}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
