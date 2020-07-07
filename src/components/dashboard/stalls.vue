<template>
  <div>
    <section class="stall-banner"></section>
    <div class="wrapper top">
      <div class="back animate__animated animate__slideInRight ">
        <router-link to="/dashboard" class="icon"><svg id="Layer" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg">
            <path d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z" /></svg></router-link> All Exhibitors
      </div>
      <div class="stalls">
        <carousel :autoplay="true" :autoplayTimeout="4000" :loop="true"  :perPageCustom="[[320, 1], [600, 2], [1100, 3]]">
          <slide class="stall animate__animated animate__zoomIn animate__fast" v-for="list in stallList" v-bind:key="list.id">
            <router-link :to="{ name: 'stalldetail', params: { id: list.id, name: list.name }}"><img :src="list.image" :alt="list.name"><!-- <h2 v-text="list.name"></h2> --></router-link>
            <div class="detail">
              <div class="offer animate__animated animate__bounceIn animate__delay-1s">
                <h2>Pay 10% Now</h2>
                and 90% later* Book Now
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  data: function() {
    return {
      stallList: [
        { image: 'dist/stall-demo.png', id: 1, name: 'Signature City' },
        { image: 'dist/booth.png', id: 2, name: 'Ayushi Builders' },
        { image: 'dist/stall-demo.png', id: 3, name: 'Prabhas Chandra' },
        { image: 'dist/booth.png', id: 4, name: 'Aashirwad Constructions' },
      ]
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>
