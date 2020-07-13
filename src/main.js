import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueCarousel from 'vue-carousel';
import Carousel3d from 'vue-carousel-3d';

import router from './router'
import store from './store'

Vue.use(Vuelidate);
Vue.use(VueCarousel);
Vue.use(Carousel3d);

router.beforeEach((to, from, next) => {
      // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/bhopal'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');
  
    if (authRequired && !loggedIn) {
      return next('/bhopal');
    }
    if (!authRequired && loggedIn) {
      next('/dashboard');
    }
  
    next();
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
