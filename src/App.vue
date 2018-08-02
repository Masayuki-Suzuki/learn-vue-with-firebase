<template lang="pug">
  #app
    Home(v-if="!isLogin")
    Editor(v-if="isLogin" :user="userData")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Home from './components/Home.vue'
import Editor from './components/Editor.vue'
import firebase from 'firebase'

@Component({
  components: {
    Home,
    Editor,
  },
})
export default class App extends Vue {
  public isLogin: boolean = false
  public userData: {} | null = null
  public created() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        this.isLogin = true
        this.userData = user
      } else {
        this.isLogin = false
        this.userData = null
      }
    })
  }
}
</script>

<style>
  /*@import '~shitajicss/docs/css/shitaji.min.css';*/
  @import "./scss/style.scss";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
