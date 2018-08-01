<template lang="pug">
  #home
    h1 {{ msg }}
    button(@click="googleLogin") Googleアカウントでログイン
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import firebase from 'firebase'

  @Component
  export default class Home extends Vue {
    public msg: string = 'Welcome to VueMarkdown'

    private googleLogin(): void {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
  }
</script>

<style scoped>

</style>