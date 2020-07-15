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
        { id:3, image: 'https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/Untitled-1__1103342385.jpg', name: 'Sagar Builder1' },
        { id:5, image: 'https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/Untitled-1__278851602.jpg', name: 'Sagar Builder 3' },
        { id:6, image: 'https://cloudimage.homeonline.com/300x150/public/uploads/profile/companyLogo/0239658fece2e867511fabbdade7fec3Logo.jpg', name: 'Sagar Builder 5' },
      ]
    }
  },
  components: {
    Carousel,
    Slide
  }
}

</script>
