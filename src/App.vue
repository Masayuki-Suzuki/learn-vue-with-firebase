<template lang="pug">
  #app
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from 'firebase'

@Component
export default class App extends Vue {
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.commit('changeLoginStateLogin')
        this.$store.commit('setUserData', user)
      } else {
        this.$store.commit('changeLoginStateLogout')
        this.$store.commit('clearUserData')
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
