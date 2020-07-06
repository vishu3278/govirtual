<template>
    <div><div class="modal-title" > 
                <h4>Enter OTP</h4>
                <p>sent to your mobile</p>

            </div>
            <div class="form animate__animated animate__backInUp" >
                <div class="input-wrap flex">
                	<input type="number" class="input text-center" maxlength="1">
                	<input type="number" class="input text-center" maxlength="1">
                	<input type="number" class="input text-center" maxlength="1">
                	<input type="number" class="input text-center" maxlength="1">
                </div>
                <div class="button-wrap"><button class="button block uppercase red">Submit</button></div>
                <div class="button-wrap flex" style="justify-content: space-around;"><div>{{getrecentmobile}} <a   @click="updateStatus(1)">Edit</a><br> mobile no.</div><div>Didn't receive OTP ? <a>Resend</a></div></div>
            </div>
    </div>
</template>

<script>
     export default {
        computed: {
            getrecentmobile () {
                return this.$store.getters.recentmobile
            }
        },
        methods:{
              updateStatus:function(status){
                this.$store.commit('changeStatus',status);
              }
            
            },

    }
</script>
