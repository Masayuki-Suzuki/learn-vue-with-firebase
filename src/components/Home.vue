<template lang="pug">
  #home
    img(src="../assets/logo.png")
    h1 Vue Markdown Editor
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from 'firebase'

@Component({
  name: 'home'
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 70px);
}
</style>
