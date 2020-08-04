<template>
    <div>

    <router-view></router-view>
     </div>
</template>

<script>
  import Header from '@/components/layout/Header.vue';
  export default {
      data:function(){
            return {
                color: 'red'
            }
        } ,
       
        components: {
            appHeader: Header
        },
        created(){

           if(this.$route.path !='/'){
               this.$store.commit('updatemenu',true);
           }
        }
    }
</script>
<style>
  /*@import '~@/assets/style.css';*/
</style>