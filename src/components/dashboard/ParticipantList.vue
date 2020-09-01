<template>
  <div class="modal-wrapper" :style="{ display: getDisplayStatus }" @click="$store.commit('showParticipant','none')">
    <div class="modal bottom" :style="{ display: getDisplayStatus }">
      <div class="modal-title">
        <h4>List of exhibitors</h4>
        <button class="close animate__animated animate__rotateIn animate__delay-1s" @click="$store.commit('showParticipant','none')">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 344.971 344.971" style="enable-background:new 0 0 344.971 344.971;" xml:space="preserve">
            <path d="M342.622,330.438L183.814,172.494L341.79,13.646c3.117-3.133,3.105-8.199-0.028-11.316
c-3.133-3.117-8.199-3.105-11.316,0.028l0,0L172.502,161.182L13.67,3.206C10.537,0.089,5.471,0.101,2.354,3.234
s-3.105,8.199,0.028,11.316l0,0L161.19,172.494L3.23,331.326c-3.117,3.133-3.105,8.199,0.028,11.316
c3.133,3.117,8.199,3.105,11.316-0.028l157.928-158.808l158.8,157.976c3.133,3.117,8.199,3.105,11.316-0.028
c3.117-3.133,3.105-8.199-0.028-11.316l0,0L342.622,330.438z" />
          </svg></button>
      </div>
      <div class="modal-inner">
        <div class="builders">
          
          <!-- <h3 class="uppercase blue-text animate__animated animate__fadeInUp ">Silver</h3> -->
          <ul class="animate__animated animate__fadeInUp ">
            <li v-for="item in participant">
              <figure class="logo"><img src="https://via.placeholder.com/120x80.png" alt=""></figure>
              <h4 class="blue-text" v-text="item.name"></h4> 
            </li>
            <!-- <li>
              <figure class="logo"><img src="https://digimela.com/platform-detail-demo/aggarwal/images/logo.jpg" alt="Silver"></figure>
              <h4 class="blue-text">AGRAWAL CONSTRUCTION CO</h4> 
            </li>
            <li>
              <figure class="logo"><img src="https://digimela.com/platform-detail-demo/nirvana/images/logo.jpg" alt="Silver"></figure>
              <h4 class="blue-text">NIRWANA GREENS</h4> 
            </li> -->
          </ul>
        </div>
      </div>
      <!-- <router-link to="/stalls" class="button red block " style="position: sticky; bottom:0; border-radius:0;">Explore Expo</router-link> -->
      <!-- <button class="button red block " >Explore Expo</button> -->
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      participant: [
        { image: require('@/assets/booth-rntu.png'), id: 1, name: 'Rabindara Nath Tagore University', offer:{headline:"Exclusive Offers", text:"Now get Exclusive Offers and More. Contact Now for details"}, url:"https://www.digimela.com/platform-detail-demo/rntu/"  },
        { image: require('@/assets/booth-sage.png'), id: 7, name: 'Sage University', offer:{headline:"Gold on Booking", text:"Get 10 Gram Gold on Booking."}, url:"https://www.digimela.com/platform-detail-demo/sage-university/" },
        
        { image: require('@/assets/booth-omega.png'), id: 3, name: 'Omega', offer:{headline:"Exclusive offers and deals", text:"Get exclusive offers and deals on property booking. Contact now for more details "}, url:"https://www.digimela.com/profiledetails/7022" },
        { image: require('@/assets/booth-hyundai.png'), id: 4, name: 'Hyundai Motors', offer:{headline:"Exclusive offers and deals", text:"Get exclusive offers and deals on property booking. Contact now for more details "}, url:"https://digimela.com/platform-detail-demo/hyundai" },
        
        { image: require('@/assets/booth-suzuki.png'), id: 5, name: 'Suzuki', offer:{headline:"Exclusive offers and deals", text:"Get exclusive offers and deals on property booking. Contact now for more details "}, url:"https://www.digimela.com/profiledetails/7023" },
      ]
    }
  },
  computed: {
    getDisplayStatus() {
      return this.$store.getters.getParticipant
    }
  },
}

</script>
