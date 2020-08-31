import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './components/home/Home.vue'
import Auditorium from './components/desk/auditorium.vue'
import Longshot from './components/desk/Longshot.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
// import StallPage from './components/dashboard/stall.vue'
import StallsPage from './components/dashboard/stalls.vue'
// import Panorama from './components/dashboard/Panorama.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/home', component: HomePage },
  { path: '/auditorium', component: Auditorium },
  { path: '/longshot', component: Longshot },
  { path: '/dashboard', component: DashboardPage },
  // { path: '/stall/:id', name: 'stalldetail',component: StallPage },
  // { path: '/panorama', component: Panorama },
  { path: '/stalls', component: StallsPage },
  { path: '*', redirect: '/stalls' }
]

export default new VueRouter({mode: 'hash', base: "", routes})
