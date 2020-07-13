import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './components/home/Home.vue'
import InformationDeskPage from './components/desk/informationdesk.vue'
import ExhibitorPage from './components/exhibitor/exhibitor.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import StallPage from './components/dashboard/stall.vue'
import StallsPage from './components/dashboard/stalls.vue'
import Panorama from './components/dashboard/Panorama.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/bhopal', component: HomePage },
  { path: '/informationdesk', component: InformationDeskPage },
  { path: '/exhibitor', component: ExhibitorPage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/stall/:id', name: 'stalldetail',component: StallPage },
  { path: '/panorama', component: Panorama },
  { path: '/stalls', component: StallsPage },
  { path: '*', redirect: '/bhopal' }
]

export default new VueRouter({mode: 'hash',base: "virtual-expo", routes})
