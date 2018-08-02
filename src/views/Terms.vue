<template lang="pug">
  .terms
    h2 利用規約
    p ここに利用規約の文章が入ります。べらべらべらべら
    router-link(:to="{ name: 'top' }") TOPに戻る
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Terms extends Vue {
    // hoge
  }
</script>

<style scoped>

</style>