<template>
  <nav class="navbar">
    <div class="logo animate__animated animate__bounceIn">
      <img src="@/assets/govirtual-logo.png" alt="logo">
    </div>
    <div class="menu-desktop uppercase">
      <router-link to="/informationdesk" exact>Information Desk</router-link>
      <router-link to="/exhibitor" exact>Exhibitors</router-link>
    </div>
    <div class="user flex animate__animated animate__fadeIn " v-if="getUserNameHeader">
      <div>Welcome <span class="name red-text">{{getUserNameHeader}}</span></div>
      <a href="#!" class="logout" @click="onLogout" title="Sign Out"> <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 471.2 471.2"><path d="M227.6 444.2h-122.9c-33.4 0-60.5-27.2-60.5-60.5V87.5c0-33.4 27.2-60.5 60.5-60.5h124.9c7.5 0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5h-124.9c-48.3 0-87.5 39.3-87.5 87.5v296.2c0 48.3 39.3 87.5 87.5 87.5h122.9c7.5 0 13.5-6 13.5-13.5S235 444.2 227.6 444.2z"/><path d="M450 226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1 0 -5.3 5.3-5.3 13.8 0 19.1l62.8 62.8h-273.9c-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5h273.9l-62.8 62.8c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l85.8-85.8C455.3 239.9 455.3 231.3 450 226.1z"/></svg></span>
</a>
    </div>
    <div class="user " v-if="!getUserNameHeader">
      <button class="button ripple red animate__animated animate__fadeIn animate__delay-1s" @click="showModaldata">Get Started</button>
    </div>
    <div class="menu-toggle " @click="chnageDisplay"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M501.3 96H10.7C4.8 96 0 100.8 0 106.7s4.8 10.7 10.7 10.7h490.7c5.9 0 10.7-4.8 10.7-10.7S507.2 96 501.3 96z" />
        <path d="M501.3 245.3H10.7C4.8 245.3 0 250.1 0 256s4.8 10.7 10.7 10.7h490.7c5.9 0 10.7-4.8 10.7-10.7S507.2 245.3 501.3 245.3z" />
        <path d="M501.3 394.7H10.7C4.8 394.7 0 399.4 0 405.3 0 411.2 4.8 416 10.7 416h490.7c5.9 0 10.7-4.8 10.7-10.7C512 399.4 507.2 394.7 501.3 394.7z" /></svg>
    </div>
    <div class="menu animate__animated animate__fadeInUp animate__faster" :style="{ display: activedisplay}">
      <ul>
        <li>
          <router-link to="/informationdesk" exact>Information Desk</router-link>
        </li>
        <li>
          <router-link to="/exhibitor" exact>Exhibitors</router-link>
        </li>
        <li v-if="getUserNameHeader"> <a @click="onLogout"> Logout</a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data: function() {
    return {
      activedisplay: 'none',

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
    }
  },

}

</script>
<style scoped>
</style>
