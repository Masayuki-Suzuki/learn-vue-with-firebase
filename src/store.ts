import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userData: null
  },
  mutations: {
    changeLoginStateLogin(state) {
      state.isLogin = true
    },
    changeLoginStateLogout(state) {
      state.isLogin = false
    },
    setUserData(state, payload) {
      state.userData = payload
    },
    clearUserData(state) {
      state.userData = null
    }
  },
  actions: {}
})
