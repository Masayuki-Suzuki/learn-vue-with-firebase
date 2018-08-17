<template lang="pug">
  #home
    h1 ログインページ
    button Googleアカウントでログイン
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'home'
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>
