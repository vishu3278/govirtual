<template>
  <div class="modal-wrapper" v-show="getCity" v-on:click.self="$store.commit('showCity',false)">
    <div class="modal bottom" v-show="getCity">
      <div class="modal-title">
        <h4>Select City</h4>
        <p>to go to city expo</p>
        <button class="close animate__animated animate__rotateIn animate__delay-1s" v-on:click="$store.commit('showCity',false)">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 344.971 344.971" style="enable-background:new 0 0 344.971 344.971;" xml:space="preserve">
            <path d="M342.622,330.438L183.814,172.494L341.79,13.646c3.117-3.133,3.105-8.199-0.028-11.316
c-3.133-3.117-8.199-3.105-11.316,0.028l0,0L172.502,161.182L13.67,3.206C10.537,0.089,5.471,0.101,2.354,3.234
s-3.105,8.199,0.028,11.316l0,0L161.19,172.494L3.23,331.326c-3.117,3.133-3.105,8.199,0.028,11.316
c3.133,3.117,8.199,3.105,11.316-0.028l157.928-158.808l158.8,157.976c3.133,3.117,8.199,3.105,11.316-0.028
c3.117-3.133,3.105-8.199-0.028-11.316l0,0L342.622,330.438z" />
          </svg></button>
      </div>
      <div class="modal-inner">
        <div class="citylist">
          <!-- <h3 class="uppercase red-text">Platinum</h3> -->
          <ul>
            <!-- <li>
              <a href="javascript:void(0)" >All India</a>
            </li> -->
            <li v-for="city in cities" v-bind:key="city.id" >
              <router-link to="/auditorium">{{city.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      showcity: true,
      cities: [
        {name: "Bhopal", id:1},
        {name: "Ahmedabad", id:12},
        {name: "Indore", id:21},
        {name: "Raipur", id:10},
        // {name: "Ghaziabad", id:15},
        // {name: "Jaipur", id:51},
        // {name: "Gurgaon", id:18},
        {name: "Jaipur", id:20},
        {name: "Noida", id:11}
      ]
    }
  },
  computed: {
    getCity() {
      if (this.$store.getters.getCity) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'initial';
      }
      return this.$store.getters.getCity
    }
  },
}

</script>
