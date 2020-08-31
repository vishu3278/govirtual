<template>
  <div>
    <section class="stall-banner"></section>
    <div class="wrapper top">
      <div v-show="longshot" v-if="isMobileData" class="long-shot-image " >
        <img src="/dist/long-shot.jpg" alt="long-shot">
      </div>
      <div v-else class="long-shot-image " >
        <img src="/dist/longshot-desktop.jpg" alt="long-shot">
      </div>
    </div>
  </div>
</template>
<script>

import { isMobile } from 'mobile-device-detect';
export default {
  data: function() {
    return {
      activedisplay: 'none',
      longshot: true
    }
  },
  created: function() {
      var longshotel = document.getElementsByClassName('long-shot-image');
      setTimeout(function() {
        longshotel[0].classList.add('visible');
        document.body.style.overflow = 'hidden';
      }, 500);
      setTimeout(function() {
        longshotel[0].setAttribute('style','transform:scale(3,3);opacity:0.0');
      }, 3000);
      setTimeout(function() {
        document.body.style.overflow = 'initial';
        longshotel[0].style.display = 'none';
        // this.longshot = false;
      }.bind(this), 5000);
  },
  computed: {
    isMobileData() {
      return isMobile ? true : false
    }
  },
  components: {
    
  },
}

</script>