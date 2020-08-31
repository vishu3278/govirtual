import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 0,
    mobilenumber: '',
    showmenu: false,
    participant:'none',
    project: 'none',
    city: false
  },
  mutations: {
    changeStatus (state,step) {
      state.step = step
    },
    changeMobileNumber (state,authData) {
      state.mobilenumber = authData.mobile
    },
    updatemenu (state,senttype) {
      state.showmenu = senttype
    },
    showParticipant (state,data) {
      state.participant = data
    },
    showProject (state,data) {
      state.project = data
    },
    showCity (state,data) {
      state.city = data
    }
  },
  actions: {
    signup({ commit, dispatch }, authData) {
      console.log(authData);
      /*axios.post('/signupNewUser?key=AIzaSyCXlVPPWknVGhfc60mt7Jkv0Xzrho7_mwc', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
          dispatch('storeUser', authData)
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => console.log(error))*/
    },
    login({ commit, dispatch }, authData) {
     /*var formData = new FormData();
      formData.append('mobile',7987102277)
      axios.post('https://preprod.homeonline.com/apis/v1/auth/send_login_otp', formData, {
        headers: {
          "source": 'api',
          "from": 'hs_app'
        }
      })
        .then(res => {
          console.log(res)
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => console.log(error))*/
     localStorage.setItem('token', '6768678678678')
      localStorage.setItem('username', 'vijay kankar')
      console.log(authData);
      commit('changeMobileNumber',authData)
      commit('changeStatus', 2)
     
      router.push('/dashboard');
    },
    logout ({commit}) {
     commit('changeMobileNumber','')
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      
      router.replace('/')
    }
   
  },
  getters: {
    signupSigninStep (state) {
      return state.step
    },
    recentmobile (state) {
      return state.mobilenumber
    },
    getmenu (state) {
      return state.showmenu
    },
    getParticipant (state) {
      return state.participant
    },
    getProject (state) {
      return state.project
    },
    getCity (state) {
      return state.city
    }
  }
})