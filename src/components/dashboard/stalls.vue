<template>
  <div>
    <section class="stall-banner">
        <video v-if="isMobileData" autoplay muted loop id="myVideo" style="width:100%; height:100%;position:absolute;">
          <source src="https://cdn.homeonline.com/public/uploads/virtualexpo/360-640-new.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <video v-else autoplay muted loop id="myVideo" style="width:100%; height:100%;position:absolute;">
          <source src="https://cdn.homeonline.com/public/uploads/virtualexpo/desktop-bg.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
    </section>
    <div class="wrapper top">
      <div v-show="longshot" v-if="isMobileData" class="long-shot-image " >
        <img src="dist/long-shot.jpg" alt="long-shot">
      </div>
      <div v-else class="long-shot-image " >
        <img src="dist/longshot-desktop.jpg" alt="long-shot">
        
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
        { image: './dist/sankalp-stall.png', id: 2, name: 'Sankalp Realty', offer:{headline:"Exclusive offers and deals on property booking ",text:"Get exclusive offers and deals on property booking. Contact now for more details "} },
        /*{ image: './dist/sankalp-stall.png', id: 3, name: 'Sankalp Realty', offer:{headline:"Exclusive offers and deals on property booking ",text:"Get exclusive offers and deals on property booking. Contact now for more details "} },*/
        { image: './dist/aditya-booth.png', id: 1, name: 'Adiya Buildcon', offer:{headline:"Exclusive Offers and More. Contact Now for details", text:"Now get Exclusive Offers and More. Contact Now for details"} },
        { image: './dist/captown-booth.png', id: 7, name: 'Captown', offer:{headline:"10 Gram Gold on Booking", text:"Get 10 Gram Gold on Booking."} },
        { image: './dist/dadva-booth.png', id: 8, name: 'Davda', offer:{headline:"Book Property with 21000/- (refundable) & get benefits worth Rs. 1 Lac*", text:"Now, book a property with 21000/- (refundable) & get benefits worth Rs. 1 Lac* & above. T&C apply."} },
        { image: './dist/dev-booth.png', id: 9, name: 'Dev ', offer:{headline:"Best Deals on Property Site Visit",text:"Get Best Deals on Property Site Visit"} },
        /*{ image: './dist/dev-booth-2.png', id: 10, name: 'Dev ', offer:{headline:"Best Deals on Property Site Visit",text:"Get Best Deals on Property Site Visit"} },*/
        { image: './dist/skylon-booth.png', id: 12, name: 'Skylon', offer:{headline:"Avail Exclusive Offers on Site Visit",text:"Best offers on site visit"} },
        { image: './dist/booth.png', id: 11, name: 'Shrimad', offer:{headline:"offer headline",text:"lorem ipsum dolor sit amet"} },
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
        document.body.style.overflow = 'hidden';
      }, 500);
      setTimeout(function() {
        longshotel[0].setAttribute('style','transform:scale(3,3);opacity:0.0');
      }, 2600);
      setTimeout(function() {
        document.body.style.overflow = 'initial';
        longshotel[0].style.display = 'none';
        // this.longshot = false;
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
.carousel-3d-slide { background:rgba(250,250,250,0.125); }
.carousel-3d-slide figure { margin:0; padding:0;}
</style>
