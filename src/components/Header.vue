<template lang="pug">
  header.header
    v-toolbar.header__toolbar(height="48" fixed)
      v-toolbar-title
        router-link.link(to="/" exact)
          span.white--text.header__title Vue Markdown
      v-spacer
      v-toolbar-items
        v-btn(v-if="!this.$store.getters.isLogin" @click="googleLogin" flat)
          span.white--text Googleアカウントでログイン
        v-btn(v-if="!this.$store.getters.isLogin" @click="githubLogin" flat)
          span.white--text Githubアカウントでログイン
        v-menu(v-if="this.$store.getters.isLogin" z-index="10" offset-y)
          v-avatar(slot="activator" icon dark)
            img.userImg(:src="this.$store.state.userData.photoURL")
          v-list
            v-list-tile
              v-list-tile-avatar
                img(:src="this.$store.state.userData.photoURL")
              v-list-tile-content
                v-list-tile-title {{ this.$store.state.userData.displayName }}
                v-list-tile-sub-title {{ this.$store.state.userData.email }}
          v-divider
          v-btn(@click="logout" flat small) ログアウト
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from 'firebase'

@Component({
  name: 'DefaultHeader'
})
export default class DefaultHeader extends Vue {
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
.menuBtn {
  height: 34px;
}
.logOut {
  width: 100%;
}
.userImg {
  height: 38px;
  width: 38px;
}
.v-menu__content {
  background: #fff;
}
</style>
