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
        this.$store.commit('changeLoginStateToLogin')
        this.$store.commit('setUserData', user)
      } else {
        this.$store.commit('changeLoginStateToLogout')
        this.$store.commit('clearUserData')
      }
    })
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
h1,
h2,
h3,
h4,
h5,
p,
ul,
li {
  margin: 0;
  line-height: 1.4;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
