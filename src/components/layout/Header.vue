<template>
  <div>
    <nav class="navbar">
      <div class="logo animate__animated animate__bounceIn">
        <img src="https://digimela.com/public/images/logo1.png" alt="logo">
      </div>
      <div class="menu-desktop uppercase" v-if="getUserNameHeader">
        <!-- <a @click="openParticipant">Information Desk</a> -->
        <!-- <a href="#" @click.prevent="openCity">Cities</a> -->
        <a @click="openParticipant">Exhibitors</a>
        <a href="#" target="_blank" >Help</a>
        <a @click="onLogout" v-if="getUserNameHeader"> Logout</a>
      </div>
      <!-- <div class="help" >
        <a @click.prevent="openCity" >
          <svg viewBox="0 0 491.6 491.6" width="22" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M245.8 0C153.8 0 79 74.8 79 166.8c0 37 21.8 93.2 68.5 176.9 31.9 57.1 63.6 105.4 65 107.4l22.9 34.8c2.3 3.5 6.2 5.6 10.4 5.6s8.1-2.1 10.4-5.6l22.9-34.8c1.3-2 32.8-49.9 65-107.4 46.7-83.7 68.5-140 68.5-176.9C412.6 74.8 337.8 0 245.8 0ZM322.3 331.6c-31.7 56.8-62.7 103.9-64 105.8l-12.5 19 -12.5-19c-1.3-2-32.6-49.5-64-105.9 -43.3-77.7-65.3-133.1-65.3-164.7C104 88.6 167.6 25 245.8 25s141.8 63.6 141.8 141.8C387.6 198.5 365.6 253.9 322.3 331.6Z"/><path d="M245.8 73.3c-51 0-92.5 41.5-92.5 92.5s41.5 92.5 92.5 92.5 92.5-41.5 92.5-92.5S296.8 73.3 245.8 73.3ZM245.8 233.3c-37.2 0-67.5-30.3-67.5-67.5s30.3-67.5 67.5-67.5c37.2 0 67.5 30.3 67.5 67.5S283 233.3 245.8 233.3Z"/></svg>
        </a>
      </div> -->
      <div class="user flex animate__animated animate__fadeIn " v-if="getUserNameHeader">
        <div>Welcome <span class="name red-text">{{getUserNameHeader}}</span></div>
      </div>
      <div class="user " v-else>
        <button class="button ripple red animate__animated animate__fadeIn animate__delay-1s" @click="showModaldata">Get Started</button>
      </div>
      <div class="menu-toggle " @click="chnageDisplay"><svg v-if="getUserNameHeader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M501.3 96H10.7C4.8 96 0 100.8 0 106.7s4.8 10.7 10.7 10.7h490.7c5.9 0 10.7-4.8 10.7-10.7S507.2 96 501.3 96z" />
          <path d="M501.3 245.3H10.7C4.8 245.3 0 250.1 0 256s4.8 10.7 10.7 10.7h490.7c5.9 0 10.7-4.8 10.7-10.7S507.2 245.3 501.3 245.3z" />
          <path d="M501.3 394.7H10.7C4.8 394.7 0 399.4 0 405.3 0 411.2 4.8 416 10.7 416h490.7c5.9 0 10.7-4.8 10.7-10.7C512 399.4 507.2 394.7 501.3 394.7z" /></svg>
      </div>
      <div v-if="getUserNameHeader" class="menu animate__animated animate__fadeInRight animate__faster" :style="{ display: activedisplay}">
        <ul>
          <li><a @click="openParticipant">Exhibitors</a></li>
          <li><a href="#" target="_blank">Help</a></li>
          <li v-if="getUserNameHeader"> <a @click="onLogout"> Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      activedisplay: 'none',
      reqModal: false
    }
  },
  computed: {
    getUserNameHeader() {
      return localStorage.getItem('username');
    },
  },
  methods: {
    showModaldata: function() {
      this.$emit('modalstatusheader', true);
      this.$store.commit('changeStatus', 0)
    },
    chnageDisplay() {
      if (this.activedisplay == 'block') {
        this.activedisplay = 'none';
      } else {
        this.activedisplay = 'block';
      }
    },
    onLogout() {
      this.$store.dispatch('logout')
    },
    openParticipant: function() {
      this.$store.commit('showParticipant', 'block')
      this.activedisplay = 'none'
    },
    openCity: function() {
      this.$store.commit('showCity',true);
    }
  },

}

</script>
