<template>
<div class="silver-panels carousel">
            <div class="item" v-for="list in silverBuilderList" v-bind:key="list.name">
                <figure><img alt="list.name" title="list.name" :src="list.image"></figure>
            </div>
            
        </div>
</template>

<script>
  
  export default {
     data:function(){
            return {
                 silverBuilderList: [
                                {image: 'https://vijay.homeonline.com/180x80/public/uploads/profile/companyLogo/images_userCompanyLogo_1536228127.jpg', name: 'Sagar Builder1'},
                                {image: 'https://vijay.homeonline.com/180x80/public/uploads/profile/companyLogo/images_userCompanyLogo_160401132030.jpg', name: 'Sagar Builder 2'},
                                  {image: 'https://vijay.homeonline.com/180x80/public/uploads/profile/companyLogo/images_userCompanyLogo_1536228127.jpg', name: 'Sagar Builder 3'},
                                {image: 'https://vijay.homeonline.com/180x80/public/uploads/profile/companyLogo/images_userCompanyLogo_160401132030.jpg', name: 'Sagar Builder 4'},
                                  {image: 'https://vijay.homeonline.com/180x80/public/uploads/profile/companyLogo/images_userCompanyLogo_1536228127.jpg', name: 'Sagar Builder 5'},
                                {image: 'https://vijay.homeonline.com/180x80/public/uploads/profile/companyLogo/images_userCompanyLogo_160401132030.jpg', name: 'Sagar Builder 6'},
                               
                            ]
            }
        }
  }
</script>
