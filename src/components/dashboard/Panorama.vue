<template>
  <div>
    <section class="stall-banner">
      <video v-if="isMobileData" autoplay muted loop id="myVideo" style="width:100%; height:100%;position:absolute;">
          <source src="dist/360-640-new.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <video v-else autoplay muted loop id="myVideo" style="width:100%; height:100%;position:absolute;">
          <source src="dist/desktop-bg.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
    </section>
    <div class="wrapper top">
      <div v-show="longshot" v-if="isMobileData" class="long-shot-image " style="position:relative; z-index:6;">
        <img src="~@/assets/long-shot.jpg" alt="long-shot">
      </div>
      <div class="back animate__animated animate__slideInRight ">
        <router-link to="/dashboard" class="icon"><svg id="Layer" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg">
            <path d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z" /></svg></router-link> All Exhibitors
      </div>
      <div style="position:relative; z-index:5;">
        <carousel-3d :autoplay="false" :autoplayTimeout="5000" :display="3" :width="isMobileData ? 340: 550" :height="isMobileData ? 500: 600" :border="0" :perspective="20" :controlsVisible="true" :controlsWidth="40" :controlsHeight="40" >
          <slide v-for="(slide, i) in stallList" :index="i" :key="i"  >
            <figure v-on:click="showProjectModal">
              <img :src="slide.image" alt="">
            </figure>
            <!-- <div class="detail">
              <div class="offer animate__animated animate__bounceIn animate__delay-1s">
                <h2 v-text="slide.offer.headline">50,000 flat discount</h2>{{ slide.offer.text }}
                 Book Now to avail the exclusive offer.
              </div>
            </div> -->
          </slide>
        </carousel-3d>
      </div>
    </div>
    
    <project-list />

  </div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import ProjectList from '@/components/dashboard/ProjectList';
import { isMobile } from 'mobile-device-detect';
export default {
  data: function() {
    return {
      stallList: [
        { image: './dist/booth.png', id: 1, name: 'Shrimad Constructions', offer: { headline: "Flat 50000 OFF", text: "on spot booking*. Book Now." } },
        { image: './dist/booth.png', id: 2, name: 'Aakriti Builders', offer: { headline: "Offer ", text: "lorem ipsum dolor sit amet, " } },
        { image: './dist/new-booth.png', id: 3, name: 'Aashirwad Builders', offer: { headline: "Free AC", text: "Get free air-conditioner on booking in expo." } },
        { image: './dist/new-booth.png', id: 4, name: 'Aashirwad Builders', offer: { headline: "Free AC", text: "Get free air-conditioner on booking in expo." } },
        { image: './dist/another-stall.png', id: 5, name: 'Aashirwad Builders', offer: { headline: "Free AC", text: "Get free air-conditioner on booking in expo." } },
        { image: './dist/another-stall.png', id: 6, name: 'Aashirwad Builders', offer: { headline: "Free AC", text: "Get free air-conditioner on booking in expo." } },
        { image: './dist/booth.png', id: 7, name: 'Gaur Constructions', offer: { headline: "Free AC", text: "Get free air-conditioner on booking in expo." } },
        { image: './dist/booth.png', id: 8, name: 'Signature Realty', offer: { headline: "offer headline", text: "lorem ipsum dolor sit amet" } },
      ],
      projectModal: false,
      longshot: true
    }
  },
  components: {
    ProjectList,
    Carousel3d,
    Slide
  },
  computed: {
    isMobileData() {
      return isMobile ? true : false
    }
  },
  created: function() {
      var longshotel = document.getElementsByClassName('long-shot-image');
      setTimeout(function() {
        longshotel[0].classList.add('visible');
      }, 500);
      setTimeout(function() {
        longshotel[0].setAttribute('style','transform:scale(3,3);opacity:0.0');
        // this.longshot = false;
      }, 2600);
      setTimeout(function() {
        // longshotel[0].setAttribute('style','transform:scale(3,3);opacity:0.0');
        this.longshot = false;
      }.bind(this), 3000);
  },
  methods: {
    showProjectModal: function(dataset) {
      // alert("click");
      this.$store.commit('showProject','block');
      this.projectModal = true;
    },
  }
}

</script>
<style type="text/css">
.stall-banner { background:none;}

</style>