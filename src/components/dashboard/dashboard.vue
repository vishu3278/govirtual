<template>
  <div>
    <section class="lobby-banner"></section>
    <div class="wrapper top">
      <app-header></app-header>
      <div v-if="isMobileData">
        <div class="led-panel">
          <div class="platinum-group">
            <div class="platinum">
              <figure><img src="https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/d58ade2724a17c1128837260c223803eUntitled.jpg" alt="platinum"></figure>
            </div>
          </div>
        </div>
        <div class="info-desk">
          <div class="button-wrap">
            <router-link to="/auditorium" class="button  red animate__animated animate__headShake animate__repeat-3 ">Explore Mela</router-link>
            <!-- <router-link to="/auditorium" class="button green" >Now Playing</router-link> -->
            
          </div>
          <a @click.prevent="openParticipant" class="text-right link ripple" style="display: block;"><img src="https://cloudimage.homeonline.com//public/uploads/virtualexpo/helpdesk.png" class="helpdesk" alt=""></a>
        </div>
        <gold-slider></gold-slider>
        <bottom-slider></bottom-slider>
      </div>
      <div v-else>
        <div class="led-panel">
          <div class="platinum-group">
            <div class="platinum">
              <figure><img src="https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/d58ade2724a17c1128837260c223803eUntitled.jpg" alt="platinum"></figure>
            </div>
          </div>
          <div class="gold-group">
            <div class="gold" v-for="item in goldBuilderList" :key="item.id">
              <figure><img :alt="item.name" :src="item.image"></figure>
            </div>
          </div>
        </div>
        <div class="info-desk">
          <div class="button-wrap">
            <router-link to="/auditorium" class="button  red animate__animated animate__headShake animate__repeat-3 ">Explore Mela</router-link>
            <!-- <router-link to="/auditorium" class="button green" >Now playing</router-link> -->
          </div>
          <a @click.prevent="openParticipant" class="text-right link ripple " style="display: block;"><img src="https://cloudimage.homeonline.com//public/uploads/virtualexpo/helpdesk.png" class="helpdesk" alt=""></a>
        </div>
        <bottom-slider></bottom-slider>
      </div>
    </div>
    <participant-list />
    <!-- <city-list /> -->
  </div>
</template>
<script>
import Header from '@/components/layout/Header.vue';
import Bottomslider from '@/components/dashboard/Bottomslider.vue';
import GoldSlider from '@/components/dashboard/GoldSlider.vue';
import ParticipantList from '@/components/dashboard/ParticipantList.vue';
// import CityList from '@/components/exhibitor/CityList.vue';
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
    bottomSlider: Bottomslider,
    GoldSlider,
    participantList: ParticipantList,
    // CityList
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
</style>
