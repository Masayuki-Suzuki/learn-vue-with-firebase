<template lang="pug">
  #home
    h1 ログインページ
    .btnGrp
      button(@click="googleLogin") Googleアカウントでログイン
      button(@click="githubLogin") Githubアカウントでログイン
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from 'firebase'

@Component({
  name: 'home'
})
export default class Home extends Vue {
  googleLogin() {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
  githubLogin() {
    firebase.auth().signInWithRedirect(new firebase.auth.GithubAuthProvider())
  }
}
</script>

<style lang="scss" scoped>
</style>
