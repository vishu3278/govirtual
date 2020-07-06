<template>
<div>
<section class="lobby-banner"></section>
    <div class="wrapper top">
        <app-header></app-header>
        <div class="led-panel">
            <div class="platinum-group">
                <div class="platinum">
                    <figure><img src="https://vijay.homeonline.com/180x80/public/uploads/profile/companyLogo/images_userCompanyLogo_1536228127.jpg" alt="platinum"></figure>
                </div>
                <div class="platinum">
                    <figure><img src="https://vijay.homeonline.com/180x80/public/uploads/profile/companyLogo/images_userCompanyLogo_1536228127.jpg" alt="platinum"></figure>
                </div>
            </div>
            <div class="gold-group">
                <div class="gold">
                    <figure><img alt="Shri Balaji Developers" title="Shri Balaji Developers" src="https://vijay.homeonline.com/180x80/public/uploads/profile/companyLogo/images_userCompanyLogo_160516150112.jpg"></figure>
                </div>
                <div class="gold">
                    <figure><img alt="Rishabh Builders" title="Rishabh Builders" src="https://vijay.homeonline.com/180x80/public/uploads/profile/companyLogo/images_userCompanyLogo_160516125425.jpg"></figure>
                </div>
                <div class="gold">
                    <figure><img src="@/assets/builder-logo.png" alt="gold"></figure>
                </div>
                <div class="gold">
                    <figure><img src="https://vijay.homeonline.com/180x80/public/uploads/profile/companyLogo/images_userCompanyLogo_160516171546.jpg" alt="Orrange group" title="Orrange group"></figure>
                </div>
            </div>
        </div>
        <div class="info-desk">
            <div class="ripple">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" r="0" fill="none" stroke="#fec842" stroke-width="5">
                        <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                        <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                    </circle>
                    <circle cx="50" cy="50" r="0" fill="none" stroke="#fec842" stroke-width="3">
                        <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>
                        <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>
                    </circle>
                </svg>
                <router-link to="/stalls" class="button red animate__animated animate__headShake animate__repeat-3 ">Enter Expo</router-link>
            </div>
            <a href="#modal-info" class="text-right" style="display: block;"><img src="@//assets/helpdesk.png" class="helpdesk" alt=""></a>
        </div>
        <bottom-slider></bottom-slider>
    </div>
    <div class="modal bottom">
        <button class="close animate__animated animate__rotateIn animate__delay-2s">
      
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 344.971 344.971" style="enable-background:new 0 0 344.971 344.971;" xml:space="preserve">
                <path d="M342.622,330.438L183.814,172.494L341.79,13.646c3.117-3.133,3.105-8.199-0.028-11.316
c-3.133-3.117-8.199-3.105-11.316,0.028l0,0L172.502,161.182L13.67,3.206C10.537,0.089,5.471,0.101,2.354,3.234
s-3.105,8.199,0.028,11.316l0,0L161.19,172.494L3.23,331.326c-3.117,3.133-3.105,8.199,0.028,11.316
c3.133,3.117,8.199,3.105,11.316-0.028l157.928-158.808l158.8,157.976c3.133,3.117,8.199,3.105,11.316-0.028
c3.117-3.133,3.105-8.199-0.028-11.316l0,0L342.622,330.438z" />
            </svg></button>
        <div class="modal-inner" :style="{ display: activedisplay}">
            <div class="modal-title">
                <h4>List of exhibitors</h4>
            </div>
            <div class="builders">
                <h3 class="uppercase red-text">Platinum</h3>
                <ul>
                    <li>
                        Platinum Builder <a href="" class="button red">Show Project</a>
                    </li>
                </ul>
                <h3 class="uppercase orange-text animate__animated animate__fadeInUp animate__delay-1s">Gold</h3>
                <ul class="animate__animated animate__fadeInUp animate__delay-1s">
                    <li>
                        Gold Builder one <a href="" class="button orange">Show Project</a>
                    </li>
                    <li>
                        Gold Builder two <a href="" class="button orange">Show Project</a>
                    </li>
                </ul>
                <h3 class="uppercase blue-text animate__animated animate__fadeInUp animate__delay-2s">Silver</h3>
                <ul class="animate__animated animate__fadeInUp animate__delay-2s">
                    <li>
                        Silver Builder one <a href="" class="button blue">Show Project</a>
                    </li>
                    <li>
                        Silver Builder two <a href="" class="button blue">Show Project</a>
                    </li>
                    <li>
                        Silver Builder three <a href="" class="button blue">Show Project</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
  import Header from '@/components/layout/Header.vue';
   import Bottomslider from '@/components/dashboard/Bottomslider.vue';
  export default {
       data:function(){
            return {
                activedisplay: 'none',
               
            }
        } ,
     components: {
            appHeader: Header,
            bottomSlider: Bottomslider
        }
  }
</script>


</style>