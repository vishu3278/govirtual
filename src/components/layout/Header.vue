<template>
  <nav class="navbar">
            <div class="logo animate__animated animate__bounceIn">
              <img src="@/assets/govirtual-logo.png" alt="logo">
            </div>
            <div class="user animate__animated animate__fadeIn " v-if="getUserNameHeader">
                Welcome <span class="name red-text">{{getUserNameHeader}}</span>
            </div>
            <div class="user " v-if="!getUserNameHeader">
                <button class="button ripple red animate__animated animate__fadeIn animate__delay-1s" @click="showModaldata">Get Started</button>
            </div>
            <div class="menu-toggle " @click="chnageDisplay"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M501.3 96H10.7C4.8 96 0 100.8 0 106.7s4.8 10.7 10.7 10.7h490.7c5.9 0 10.7-4.8 10.7-10.7S507.2 96 501.3 96z" />
                    <path d="M501.3 245.3H10.7C4.8 245.3 0 250.1 0 256s4.8 10.7 10.7 10.7h490.7c5.9 0 10.7-4.8 10.7-10.7S507.2 245.3 501.3 245.3z" />
                    <path d="M501.3 394.7H10.7C4.8 394.7 0 399.4 0 405.3 0 411.2 4.8 416 10.7 416h490.7c5.9 0 10.7-4.8 10.7-10.7C512 399.4 507.2 394.7 501.3 394.7z" /></svg>
            </div>
            <div class="menu animate__animated animate__fadeInUp animate__faster" :style="{ display: activedisplay}">
                <ul>
                   <li> <router-link  to="/informationdesk" exact>Information Desk</router-link></li>
                   <li> <router-link  to="/exhibitor" exact>Exhibitors</router-link></li>
                  <li v-if="getUserNameHeader"  > <a @click="onLogout"> Logout</a></li>
                </ul>
            </div>
        </nav>

</template>
<script>
 
  export default {
       data:function(){
            return {
                activedisplay: 'none',
               
            }
        } ,
         computed: {
            getUserNameHeader () {
                return localStorage.getItem('username');
            },
        }, methods:{
              showModaldata:function(){
                this.$emit('modalstatusheader',true);  
                this.$store.commit('changeStatus',0)
              },
              chnageDisplay(){
                  if(this.activedisplay =='block'){
                      this.activedisplay ='none';
                  }else{
                      this.activedisplay ='block';  
                  }
              },
            onLogout() {
                this.$store.dispatch('logout')
            }
        },
      
    }
</script>
<style scoped>
</style>