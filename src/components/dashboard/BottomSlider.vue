<template>
  <div class="silver-panels ">
    <!-- <p class="text-center" style="margin-top: 0;">Silver Partners</p> -->
    <carousel :perPageCustom="[[320,4],[800,5]]" :autoplay="true" :autoplayTimeout="3000" :loop="true" :scrollPerPage="false" :paginationEnabled="false" >
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
        /*{ image: 'https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/Untitled-1__1103342385.jpg', name: 'Sagar Builder1' },
        { image: 'https://vijay.homeonline.com/180x80/public/uploads/profile/companyLogo/images_userCompanyLogo_160401132030.jpg', name: 'Sagar Builder 2' },
        { image: 'https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/Untitled-1__278851602.jpg', name: 'Sagar Builder 3' },
        { image: 'https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/0239658fece2e867511fabbdade7fec3Logo.jpg', name: 'Sagar Builder 5' },*/
        { image: 'https://cdn.homeonline.com/public/assets/frontend/images/project/solaris-logo.jpg', name: 'Sagar Builder 4' },
        { image: 'https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/0c1b65fc78bb7aa0645d3a4f226e3277compaylogocolor.jpg', name: 'Sagar Builder 6' },

      ]
    }
  },
  components: {
    Carousel,
    Slide
  }
}

</script>
