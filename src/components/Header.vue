<template lang="pug">
  header.header
    v-toolbar.header__toolbar(fixed)
      v-toolbar-title
        router-link.link(to="/" exact)
          span.white--text.header__title Vue Markdown
      v-spacer
      v-toolbar-items
        v-btn(v-if="!this.$store.state.isLogin" @click="googleLogin" flat)
          span.white--text Googleアカウントでログイン
        v-btn(v-if="!this.$store.state.isLogin" @click="githubLogin" flat)
          span.white--text Githubアカウントでログイン
        p(v-if="this.$store.state.isLogin")
          span.white--text {{ this.$store.state.userData.displayName }}
        v-btn(v-if="this.$store.state.isLogin" @click="logout" flat)
          span.white--text ログアウト
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from 'firebase'

@Component({
  name: 'header'
})
export default class Header extends Vue {
  googleLogin() {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
  githubLogin() {
    firebase.auth().signInWithRedirect(new firebase.auth.GithubAuthProvider())
  }
  logout() {
    firebase.auth().signOut()
  }
}
</script>

<style lang="scss" scoped>
.header {
  &__toolbar {
    background: #21b880;
  }
}
.link {
  text-decoration: none;
}
</style>
