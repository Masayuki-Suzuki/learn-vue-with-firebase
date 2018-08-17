<template lang="pug">
  .editor
    h2 エディター画面
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'editor',
  layout: 'default'
})
export default class Editor extends Vue {}
</script>

<style lang="scss" scoped>
</style>
