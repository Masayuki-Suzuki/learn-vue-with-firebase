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
      console.log(user)
      if (user) {
        this.$store.commit('changeLoginStateLogin')
      } else {
        this.$store.commit('changeLoginStateLogout')
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
