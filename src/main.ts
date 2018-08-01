import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

const fbConfig = {
  apiKey: 'AIzaSyB4TNecNJM6oGmm3Y-FysZm3yIOVqFxpp0',
  authDomain: 'vue-markdown-cd84f.firebaseapp.com',
  databaseURL: 'https://vue-markdown-cd84f.firebaseio.com',
  projectId: 'vue-markdown-cd84f',
  storageBucket: 'vue-markdown-cd84f.appspot.com',
  messagingSenderId: '680313950806',
}
firebase.initializeApp(fbConfig)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
