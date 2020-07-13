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
      <div class="stalls">
        <carousel :autoplay="!projectModal" :autoplayTimeout="5000" :loop="true" :speed="1000" :perPageCustom="[[320, 1], [800, 2]]" :scrollPerPage="false" :paginationEnabled="false" :navigationEnabled="true">
          <slide class="stall animate__animated animate__zoomIn animate__fast" v-for="list in stallList" v-bind:key="list.id" v-bind:data-id="list.id" @slideclick="showProjectModal" :data-id="list.id" :data-name="list.name">
            <figure>
              <img :src="list.image" :alt="list.name">
            </figure>
            <!-- <router-link :to="{ name: 'stalldetail', params: { id: list.id, name: list.name }}"><img :src="list.image" :alt="list.name"></router-link> -->
            <div class="detail">
              <div class="offer animate__animated animate__bounceIn animate__delay-1s">
                <h2 v-text="list.offer.headline">50,000 flat discount</h2>{{ list.offer.text }}
                on booking* Book Now to avail the exclusive offer.
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>

    <project-list />
    
  </div>
</template>
<script>
import ProjectList from '@/components/dashboard/ProjectList';
import { Carousel, Slide } from 'vue-carousel';
import { isMobile } from 'mobile-device-detect';

export default {
  data: function() {
    return {
      projectModal: false,
      stallList: [
        { image: './dist/booth.png', id: 1, name: 'Shrimad Constructions', offer:{headline:"Flat 50000 OFF",text:"on spot booking*. Book Now."} },
        { image: './dist/booth.png', id: 2, name: 'Aakriti Builders', offer:{headline:"Offer ",text:"lorem ipsum dolor sit amet, "} },
        /*{ image: './dist/booth-builder.png', id: 3, name: 'Aashirwad Builders' },
        { image: './dist/booth-builder.png', id: 4, name: 'Aashirwad Builders' },*/
        /*{ image: './dist/another-stall.png', id: 5, name: 'Aashirwad Builders' },
        { image: './dist/another-stall.png', id: 6, name: 'Aashirwad Builders' },*/
        { image: './dist/booth.png', id: 7, name: 'Gaur Constructions', offer:{headline:"Free AC",text:"Get free air-conditioner on booking in expo."} },
        { image: './dist/booth.png', id: 8, name: 'Signature Realty', offer:{headline:"offer headline",text:"lorem ipsum dolor sit amet"} },
      ],
      longshot: true
    }
  },
  components: {
    ProjectList,
    Carousel,
    Slide
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
  computed: {
    isMobileData() {
      return isMobile ? true : false
    }
  },
  methods: {
    showProjectModal: function(dataset) {
      // alert("click");
      this.$store.commit('showProject','block');
      this.projectModal = true;
      console.log(dataset.name, dataset.id);
    },
  }
}
</script>
<style>
.VueCarousel-navigation-prev[data-v-453ad8cd],
.VueCarousel-navigation-next[data-v-453ad8cd] {
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: 1px solid #151515;
  border-radius: 50px;
  width: 40px; height: 40px;
}
.stall-banner { background:none;}
.carousel-3d-slide { background:rgba(250,250,250,0.125); }
.carousel-3d-slide figure { margin:0; padding:0;}
.long-shot-image { position:absolute; z-index:9; transform-origin: 50%; transition: all 300ms ease-in-out; transform:scale(0.1,0.1); opacity:0;}
.long-shot-image.visible { transform:scale(1,1); opacity:1;}
.long-shot-image.vanished { display:none; }

</style>
