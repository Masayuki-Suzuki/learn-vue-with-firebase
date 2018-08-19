<template lang="pug">
  .editor
    h2 エディター画面
    p UserName: {{ this.$store.state.userData.displayName }}
    button(@click="logout") ログアウト
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from 'firebase'

@Component({
  name: 'editor',
  layout: 'default'
})
export default class Editor extends Vue {
  logout() {
    firebase.auth().signOut()
  }
}
</script>

<style lang="scss" scoped>
</style>
