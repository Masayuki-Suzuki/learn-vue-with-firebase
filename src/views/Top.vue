<template lang="pug">
  .top
    Home(v-if="!isLogin")
    Editor(v-if="isLogin" :user="userData")
    router-link(:to="{ name:'terms' }") 利用規約
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Home from '../components/Home.vue'
  import Editor from '../components/Editor.vue'
  import firebase from 'firebase'

  @Component({
    components: {
      Home,
      Editor,
    },
  })
  export default class Top extends Vue {
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

<style scoped lang="scss">
  .top {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
