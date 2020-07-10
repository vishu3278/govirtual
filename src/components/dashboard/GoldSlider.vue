<template>
  <div class="gold-slider ">
    <!-- <p class="text-center" style="margin-top:0;">Gold Partners</p> -->
    <carousel :perPage="3" :autoplay="true" :autoplayTimeout="6000" :loop="true" :scrollPerPage="false" :paginationEnabled="false"  >
      <slide class="item" v-for="list in silverBuilderList" v-bind:key="list.name">
        <figure><img alt="list.name" title="list.name" :src="list.image"></figure>
      </slide>
    </carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  data: function() {
    return {
      silverBuilderList: [
        { image: 'https://vijay.homeonline.com/180x80/public/uploads/profile/companyLogo/images_userCompanyLogo_1536228127.jpg', name: 'Sagar Builder1' },
        { image: 'https://vijay.homeonline.com/180x80/public/uploads/profile/companyLogo/images_userCompanyLogo_160401132030.jpg', name: 'Sagar Builder 2' },
        { image: 'https://vijay.homeonline.com/300x150/public/uploads/profile/companyLogo/images_userCompanyLogo_160507125853.jpg', name: 'Sagar Builder 3' },
        { image: 'https://cdn.homeonline.com/public/assets/frontend/images/project/solaris-logo.jpg', name: 'Sagar Builder 4' },
        { image: 'https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/d58ade2724a17c1128837260c223803eUntitled.jpg', name: 'Sagar Builder 5' },
        { image: 'https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/0239658fece2e867511fabbdade7fec3Logo.jpg', name: 'Sagar Builder 6' },

      ]
    }
  },
  components: {
    Carousel,
    Slide
  }
}

</script>
