import Vue from 'vue'
import Vuex from 'vuex'

import getCurretTime from './lib/getCurrentTime'

import Memo from './interfaces/Memo'

Vue.use(Vuex)

interface State {
  isLogin: boolean
  userData: {} | null
  memos: Memo[]
  selectedIndex: number
}

const state: State = {
  isLogin: false,
  userData: null,
  memos: [
    { markdown: '', name: 'untitled document', createDate: '', editDate: '' }
  ],
  selectedIndex: 0
}

export default new Vuex.Store({
  state,
  getters: {
    getMemos(state) {
      return state.memos
    },
    getMemo(state) {
      return state.memos[state.selectedIndex]
    },
    isLogin(state) {
      return state.isLogin
    },
    getSelectedIndex(state) {
      return state.selectedIndex
    }
  },
  mutations: {
    changeLoginStateToLogin(state) {
      state.isLogin = true
    },
    changeLoginStateToLogout(state) {
      state.isLogin = false
    },
    setUserData(state, payload) {
      state.userData = payload
    },
    clearUserData(state) {
      state.userData = null
    },
    setMemoData(state, payload) {
      Vue.set(state.memos, state.selectedIndex, payload)
    },
    setSelectedIndex(state, payload) {
      state.selectedIndex = payload
    },
    createNewMemo(state, payload) {
      state.memos.push(payload)
    }
  },
  actions: {
    createNewMemo({ state, commit }) {
      const newMemo: Memo = {
        markdown: 'Enter your markdown here.',
        name: `untitled document ${state.selectedIndex + 1}`,
        createDate: getCurretTime(),
        editDate: ''
      }
      commit('setSelectedIndex', state.selectedIndex + 1)
      commit('createNewMemo', newMemo)
    }
  }
})
