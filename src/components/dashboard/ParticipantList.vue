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
          <!-- <h3 class="uppercase red-text">Platinum</h3> -->
          <!-- <ul>
            <li>
              <figure class="logo"><img src="https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/d58ade2724a17c1128837260c223803eUntitled.jpg" alt="platinum"></figure>
              <h4 class="red-text">Sankalp Realty</h4> <a href="" class="button red">Show Stall</a>
            </li>
          </ul> -->
          <!-- <h3 class="uppercase orange-text animate__animated animate__fadeInUp ">Gold</h3>
          <ul class="animate__animated animate__fadeInUp ">
            <li>
              <figure class="logo"><img src="https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/0239658fece2e867511fabbdade7fec3Logo.jpg" alt="platinum"></figure>
              <h4 class="orange-text">Aditya Buildcon</h4> <a href="" class="button orange">Show Stall</a>
            </li>
            
            <li>
              <figure class="logo"><img src="https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/Untitled-1__278851602.jpg" alt="platinum"></figure>
              <h4 class="orange-text">Davda Infrastructure</h4> 
            </li>
            <li>
              <figure class="logo"><img src="https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/Untitled-1__1103342385.jpg" alt="platinum"></figure>
              <h4 class="orange-text">Soham Group</h4> 
            </li>
            <li>
              <figure class="logo"><img src="https://cdn.homeonline.com/public/default/frontend/custom/images/new/noagent.jpg" alt="platinum"></figure>
              <h4 class="orange-text">Captown Infracon</h4> 
            </li>
            <li>
              <figure class="logo"><img src="https://cdn.homeonline.com/public/default/frontend/custom/images/new/noagent.jpg" alt="platinum"></figure>
              <h4 class="orange-text">Sky Infra</h4> 
            </li>
          </ul> -->
          <!-- <h3 class="uppercase blue-text animate__animated animate__fadeInUp ">Silver</h3> -->
          <ul class="animate__animated animate__fadeInUp ">
            <li>
              <figure class="logo"><img src="https://digimela.com/platform-detail-demo/rajyash/images/02.jpg" alt="Silver"></figure>
              <h4 class="blue-text">RAJYASH RISE</h4> 
            </li>
            <li>
              <figure class="logo"><img src="https://digimela.com/platform-detail-demo/aggarwal/images/logo.jpg" alt="Silver"></figure>
              <h4 class="blue-text">AGRAWAL CONSTRUCTION CO</h4> 
            </li>
            <li>
              <figure class="logo"><img src="https://digimela.com/platform-detail-demo/nirvana/images/logo.jpg" alt="Silver"></figure>
              <h4 class="blue-text">NIRWANA GREENS</h4> 
            </li>
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
  computed: {
    getDisplayStatus() {
      return this.$store.getters.getParticipant
    }
  },
}

</script>
