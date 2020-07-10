<template>
  <div class="modal-wrapper" :style="{ display: getDisplayStatus }" @click.self="$store.commit('showProject','none')">
      <div class="modal bottom project" :style="{ display: getDisplayStatus }">
        <button @click="$store.commit('showProject','none')" class="close animate__animated animate__rotateIn animate__delay-1s">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 344.971 344.971" style="enable-background:new 0 0 344.971 344.971;" xml:space="preserve">
            <path d="M342.622,330.438L183.814,172.494L341.79,13.646c3.117-3.133,3.105-8.199-0.028-11.316
c-3.133-3.117-8.199-3.105-11.316,0.028l0,0L172.502,161.182L13.67,3.206C10.537,0.089,5.471,0.101,2.354,3.234
s-3.105,8.199,0.028,11.316l0,0L161.19,172.494L3.23,331.326c-3.117,3.133-3.105,8.199,0.028,11.316
c3.133,3.117,8.199,3.105,11.316-0.028l157.928-158.808l158.8,157.976c3.133,3.117,8.199,3.105,11.316-0.028
c3.117-3.133,3.105-8.199-0.028-11.316l0,0L342.622,330.438z" />
          </svg></button>
        <div class="modal-inner">
          <div class="modal-title">
            <h4>List of Projects</h4>
            <p>by Shrimad Construction</p>
          </div>
          <div class="list-wrapper projects">
            <div class="card">
              <div class="flex">
                <div class="col">
                  <div class="card-image openGallery ">
                    <img src="https://cloudimage.homeonline.com/138x92/public/uploads/property/images/lightbox/257195e3c0e8347c6b_blob.jpeg" class="" alt="2 BHK Row House" title="2 BHK Row House">
                  </div>
                </div>
                <div class="col prop-details">
                  <div class="price flex">
                    <div class="prices">
                      <span class="rera ">Rera</span> <span class="offer">Offer</span><br>&#x20B9; <strong>12 - 24 Lac</strong>
                    </div>
                    <span class="verified">Verified</span>
                  </div>
                  <h2 class="prop-title">
                    2 BHK Row House
                  </h2>
                  <div class="builder-name"> by <span>Shrimad Constructions</span>
                  </div>
                  <div class="location-name" > Trilanga</div>
                  <div class="proj-units">
                        Ready to move
                        <span class="area-detail" title="Carpet Area">
                            1000 Sq. Ft.
                            (C)</span> <span itemprop="floorSize" class="area-detail" title="Built Area">1200 Sq. Ft. (B)</span>
                    </div>
                </div>
              </div>
                  <div class="btn-wrapper">
                    <a href="https://preprod.homeonline.com/sale/residential_plot-bhojpur_road-bhopal/IPMPLJJ5LUU8/srchdet" target="_blank" class="button  "> View Detail</a>
                    <button class="button orange "> <span>I'm Interested</span></button>
                  </div>
            </div>
            <div class="card">
              <div class="flex">
                <div class="col">
                  <div class="card-image openGallery ">
                    <img src="https://cloudimage.homeonline.com/138x92/public/uploads/property/images/lightbox/257195e3c0e8347c6b_blob.jpeg" class="" alt="2 BHK Row House" title="2 BHK Row House">
                  </div>
                </div>
                <div class="col prop-details">
                  <div class="price flex">
                    <div class="prices">
                      <span class="rera ">Rera</span> <span class="offer">Offer</span><br>&#x20B9; <strong>24 Lac</strong>
                    </div>
                    <span class="verified">Verified</span>
                  </div>
                  <h2 class="prop-title">
                    3 BHK Villa
                  </h2>
                  <div class="builder-name"> by <span>Shrimad Constructions</span>
                  </div>
                  <div class="location-name" > Kolar Road</div>
                  <div class="proj-units">
                        Ready to move
                        <span class="area-detail" title="Carpet Area">
                            1000 Sq. Ft.
                            (C)</span> <span class="area-detail" title="Built Area">1200 Sq. Ft. (B)</span>
                    </div>
                </div>
              </div>
              <div class="btn-wrapper">
                <a href="https://preprod.homeonline.com/sale/4BHK-apartment-kolar_road-bhopal/SH6HT8Z72UC6/srchdet" target="_blank" class="button "> View Detail</a>
                <button class="button "> <span style="width:24px; height:16px; display:inline-block; vertical-align:middle;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.7 426.7"><path d="M421.9 56.3c-6.5-6.8-17.4-7-24.1-0.4 -0.1 0.1-0.3 0.3-0.4 0.4L119.3 334.4l-90.3-90.3c-6.8-6.5-17.6-6.4-24.1 0.4 -6.4 6.6-6.4 17.1 0 23.7l102.4 102.4c6.7 6.7 17.5 6.7 24.1 0L421.5 80.4C428.2 73.9 428.4 63.1 421.9 56.3z"/></svg></span> Captured</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return{
      projectModal: false,
    }
  },
  /*props: ['display'],*/
  computed: {
    getDisplayStatus() {
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
