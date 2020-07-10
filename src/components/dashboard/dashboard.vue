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
            <router-link to="/stalls" class="button  red animate__animated animate__headShake animate__repeat-3 ">Explore Expo</router-link>
          </div>
          <a @click="openParticipant" class="text-right link ripple" style="display: block;"><img src="~@/assets/helpdesk.png" class="helpdesk" alt=""></a>
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
            <div class="gold">
              <figure><img alt="Shri Balaji Developers" title="Shri Balaji Developers" src="https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/0c1b65fc78bb7aa0645d3a4f226e3277compaylogocolor.jpg"></figure>
            </div>
            <div class="gold">
              <figure><img alt="Rishabh Builders" title="Rishabh Builders" src="https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/0239658fece2e867511fabbdade7fec3Logo.jpg"></figure>
            </div>
            <div class="gold">
              <figure><img src="@/assets/builder-logo.png" alt="gold"></figure>
            </div>
            <div class="gold">
              <figure><img src="https://cdn.homeonline.com/public/assets/frontend/images/project/solaris-logo.jpg" alt="Orrange group" title="Orrange group"></figure>
            </div>
          </div>
        </div>
        <div class="info-desk">
          <div class="button-wrap">
            <router-link to="/stalls" class="button  red animate__animated animate__headShake animate__repeat-3 ">Explore Expo</router-link>
          </div>
          <a href="!#" @click="openParticipant" class="text-right link ripple " style="display: block;"><img src="~@/assets/helpdesk.png" class="helpdesk" alt=""></a>
        </div>
        <bottom-slider></bottom-slider>
      </div>
    </div>
    <participant-list></participant-list>
  </div>
</template>
<script>
import Header from '@/components/layout/Header.vue';
import Bottomslider from '@/components/dashboard/Bottomslider.vue';
import GoldSlider from '@/components/dashboard/GoldSlider.vue';
import ParticipantList from '@/components/dashboard/ParticipantList.vue';
import { isMobile } from 'mobile-device-detect';
export default {
  data: function() {
    return {
      activedisplay: 'none',

    }
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
    participantList: ParticipantList
  },
  methods: {
    openParticipant:function(){
        this.$store.commit('showParticipant','block')
        this.activedisplay='none'
    }
  }
}

</script>
</style>
