<template lang="pug">
  #app
    router-view
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class App extends Vue {
    // hogehoge
  }
</script>

<style scoped lang="scss">
  /*@import '~shitajicss/docs/css/shitaji.min.css';*/
  @import "./scss/style.scss";
</style>