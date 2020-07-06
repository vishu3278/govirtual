<template>
    <div><div class="modal-title" >
                <h4>Set Account Details</h4>
                <p>Just complete last step</p>
            </div>
            <form @submit.prevent="onRegister">
            <div class="form animate__animated animate__backInUp" >
                 <div class="input-wrap"> <input 
                        type="email"
                        id="email" 
                        @blur="$v.email.$touch()" 
                        class="input" 
                        v-model="email" 
                        placeholder="Enter Email.">
                <p  class="error"  v-if="!$v.email.email">Please provide a valid email address.</p>
                <p  class="error"  v-if="!$v.email.required && submitStatus=='ERROR'">This field must not be empty.</p>
                </div>


                <div class="input-wrap"> <input 
                        type="number" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                        id="mobile" 
                        @blur="$v.mobile.$touch()" 
                        class="input" 
                        v-model="mobile" min="0" 
                        placeholder="Enter Mobile no.">
                 <p class="error"  v-if="!$v.mobile.required && submitStatus=='ERROR'">Please  enter Email ID/ Mobile Number.</p>
                <p  class="error"  v-if="!$v.mobile.minLength">Allow only 10 characters</p>
                <p  class="error"  v-if="!$v.mobile.maxLength">Allow only 10 characters</p>
                 <p  class="error"  v-if="!$v.mobile.integer">Please enter valid mobile number</p>
                </div>
                <div class="input-wrap"><input 
                                    type="password" 
                                    id="password" 
                                    @blur="$v.mobile.$touch()" 
                                    class="input" 
                                    v-model="password" 
                                    placeholder="Enter Password">
                 <p class="error"  v-if="!$v.password.required && submitStatus=='ERROR'">Please  enter password.</p>
                         <p  class="error"  v-if="!$v.password.minLength">Minimum length is 4 characters</p>
                         <p  class="error"  v-if="!$v.password.maxLength">Maximum length is 40 characters</p></div>
                <div class="button-wrap"><button  type="submit"  class="button block uppercase red">Register</button></div>
                <div class="button-wrap text-center" @click="updateStatus(1)">Existing user ? <a>Login</a></div>
            </div>
            </form>
    </div>
</template>

<script>
 import { required, email,numeric, integer,minValue, minLength, maxLength} from 'vuelidate/lib/validators'
export default {
     data () {
      return {
        email: '',
        mobile: '',
        password: '',
        submitStatus: null
      }
    },
    validations: {
    email: {
        required,
        email
      },
      mobile: {
        required,
        integer,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      password: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20),
      }
    },
     methods:{
              updateStatus:function(status){
                this.$store.commit('changeStatus',status);
              },
               onRegister () {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    const formData = {
                        mobile: this.mobile,
                        password: this.password,
                         email: this.email
                    }
                    //this.$store.dispa
                    this.$store.dispatch('signup', formData)
                }
                }
        },

    }
</script>

