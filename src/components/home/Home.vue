<template>
<div>
    <div v-if="isMobileData"><section class="hero-banner" ></section>
        <div class="wrapper">
            <app-header @modalstatusheader="showModal=$event"></app-header>
  
        <div class="intro-wrapper">
            <div class="info animate__animated animate__fadeInDown animate__delay-1s">
                <h3>Welcome to <span class="red-text">all new</span></h3>
                <h1><span class="red-text">Virtual</span> Expo</h1>
                <h4>Property deals on the go</h4>
            </div>
            <div class="pointer animate__animated animate__bounceInUp animate__delay-2s">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 63.5 63.5">
                    <path d="M40.2 63.5l-20.6-20.6h12.7C30.4 23.4 20 7.1 6.6 3.2L2.8 2.1 6.6 1C8.9 0.3 11.3 0 13.6 0 31.1 0 45.8 18.4 48 43h12.8L40.2 63.5zM25.2 45.3l15 15 15-15h-9.3l-0.1-1.1C44 20.3 30.2 2.3 13.6 2.3c-0.8 0-1.6 0-2.5 0.1 12.8 6 22.1 22.1 23.6 41.6l0.1 1.3L25.2 45.3 25.2 45.3z" fill="#fec842" /></svg>
            </div>
            <div class="ripple animate__animated animate__bounceInUp animate__delay-2s">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" r="0" fill="none" stroke="#fec842" stroke-width="4">
                        <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                        <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                    </circle>
                    <circle cx="50" cy="50" r="0" fill="none" stroke="#fec842" stroke-width="3">
                        <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>
                        <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>
                    </circle>
                </svg>
            </div>
        </div>
    </div>
  
     <div class="modal" v-if="showModal" >
     <app-model @modalstatus="showModal=$event"></app-model>
     </div>
    </div>
     <div v-else><section class="hero-banner" ></section>
        <div class="wrapper">
            <app-header @modalstatusheader="showModal=$event"></app-header>
  
        <div class="intro-wrapper">
            <div class="info animate__animated animate__fadeInDown animate__delay-1s">
                <h3>Welcome to <span class="red-text">all new</span></h3>
                <h1><span class="red-text">Virtual</span> Expo</h1>
                <h4>Property deals on the go</h4>
            </div>
            <div class="pointer animate__animated animate__bounceInUp animate__delay-2s">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 63.5 63.5">
                    <path d="M40.2 63.5l-20.6-20.6h12.7C30.4 23.4 20 7.1 6.6 3.2L2.8 2.1 6.6 1C8.9 0.3 11.3 0 13.6 0 31.1 0 45.8 18.4 48 43h12.8L40.2 63.5zM25.2 45.3l15 15 15-15h-9.3l-0.1-1.1C44 20.3 30.2 2.3 13.6 2.3c-0.8 0-1.6 0-2.5 0.1 12.8 6 22.1 22.1 23.6 41.6l0.1 1.3L25.2 45.3 25.2 45.3z" fill="#fec842" /></svg>
            </div>
            <div class="ripple animate__animated animate__bounceInUp animate__delay-2s">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" r="0" fill="none" stroke="#fec842" stroke-width="4">
                        <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                        <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                    </circle>
                    <circle cx="50" cy="50" r="0" fill="none" stroke="#fec842" stroke-width="3">
                        <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>
                        <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>
                    </circle>
                </svg>
            </div>
        </div>
    </div>
  
     <div class="modal" v-if="showModal" >
     <app-model @modalstatus="showModal=$event"></app-model>
     </div>
    </div>
    </div>
</template>

<script>
  import LoginModel from '@/components/layout/Loginmodel.vue';
   import Header from '@/components/layout/Header.vue';
   import { isMobile } from 'mobile-device-detect';
    export default {
        data:function(){
            return {
                color: 'red',
                showModal :false    

            }
        } , 
        computed: {
             isMobileData() {
               return isMobile ? true : false
            }
        },
        created() {
            setTimeout(function () { var intro = document.getElementsByClassName('intro-wrapper');
            intro[0].style.display = 'none'; }, 5000);

        },
        components: {
            appModel: LoginModel,
             appHeader: Header,
        }
    }
</script>

