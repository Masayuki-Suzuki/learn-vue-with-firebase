import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    changeLoginStateLogin(state) {
      state.isLogin = true
    },
    changeLoginStateLogout(state) {
      state.isLogin = false
    }
  },
  actions: {}
})
