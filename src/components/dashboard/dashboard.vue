<template>
  <div>
    <section class="lobby-banner"></section>
    <div class="wrapper top">
      <app-header></app-header>
      <div class="dashboard-links">
        <router-link to="/auditorium" class="audi-link left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 13.28125 6.78125 L 4.78125 15.28125 L 4.09375 16 L 4.78125 16.71875 L 13.28125 25.21875 L 14.71875 23.78125 L 7.9375 17 L 28 17 L 28 15 L 7.9375 15 L 14.71875 8.21875 Z"/></svg> <span>Auditorium</span></router-link>
        <router-link to="/auditorium" class="res-link right"><span>Resource Desk</span>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 18.71875 6.78125 L 17.28125 8.21875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 17.28125 23.78125 L 18.71875 25.21875 L 27.21875 16.71875 L 27.90625 16 L 27.21875 15.28125 Z"/></svg></router-link>
        <router-link to="/stalls" class="hall-link right"><span>Exhibit Hall</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 18.71875 6.78125 L 17.28125 8.21875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 17.28125 23.78125 L 18.71875 25.21875 L 27.21875 16.71875 L 27.90625 16 L 27.21875 15.28125 Z"/></svg></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/layout/Header.vue';

import { isMobile } from 'mobile-device-detect';
export default {
  data: function() {
    return {
      activedisplay: 'none',
      goldBuilderList: [
        { id:3, image: 'https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/Untitled-1__1103342385.jpg', name: 'Sagar Builder1' },
        { id:5, image: 'https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/Untitled-1__278851602.jpg', name: 'Sagar Builder 3' },
        { id:6, image: 'https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/0239658fece2e867511fabbdade7fec3Logo.jpg', name: 'Sagar Builder 5' },
        /*{ id:1, image: 'https://cdn.homeonline.com/public/assets/frontend/images/project/solaris-logo.jpg', name: 'Sagar Builder 4' },
        { id:2, image: 'https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/0c1b65fc78bb7aa0645d3a4f226e3277compaylogocolor.jpg', name: 'Sagar Builder 6' },*/

      ]
    }
  },
  created: function() {
    this.openCity();
  },
  computed: {
    isMobileData() {
      return isMobile ? true : false
    }
  },
  components: {
    appHeader: Header,
  },
  methods: {
    openParticipant:function(){
        this.$store.commit('showParticipant','block')
        this.activedisplay='none'
    },
    openCity: function() {
      this.$store.commit('showCity',true);
    }
  }
}

</script>
<style scoped>
.wrapper.top { min-height: 40vh;}
</style>