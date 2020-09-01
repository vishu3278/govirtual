<template>
  <div class="modal-wrapper" :style="{ display: getDisplayStatus }" @click.self="$store.commit('showProject','none')">
    <div class="modal bottom project" :style="{ display: getDisplayStatus }">
      <div class="modal-title">
        <h4>List of Variants</h4>
        <p>by Hyundai</p>
        <button @click="$store.commit('showProject','none')" class="close animate__animated animate__rotateIn animate__delay-1s">
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
          <ul class="animate__animated animate__fadeInUp ">
            <li>
              <figure class="logo"><a href="https://digimela.com/platform-detail-demo/hyundai" target="_blank"><img src="https://via.placeholder.com/120x80.png" alt=""></a></figure>
              <h4 class="blue-text">
                <a href="https://digimela.com/platform-detail-demo/hyundai" target="_blank" class="orange-text">
                  Creta
                </a>
              </h4>
            </li>
            <li>
              <figure class="logo"><a href="https://digimela.com/platform-detail-demo/hyundai" target="_blank"><img src="https://via.placeholder.com/120x80.png" alt=""></a></figure>
              <h4 class="blue-text">
                <a href="https://digimela.com/platform-detail-demo/hyundai" target="_blank" class="blue-text">
                  Sonata
                </a>
              </h4>
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
      projectModal: false,
    }
  },
  /*props: ['display'],*/
  computed: {
    getDisplayStatus() {
      if (this.$store.getters.getProject == 'block') {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'initial';
      }
      return this.$store.getters.getProject
    }
  },
  methods: {
    /*showProjectModal: function(dataset) {
      // alert("click");
      this.projectModal = true;
      console.log(dataset.name, dataset.id);
    }*/
  }
}

</script>
