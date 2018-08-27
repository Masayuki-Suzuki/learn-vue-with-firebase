<template lang="pug">
  v-app
    .container
      DefaultHeader
      router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DefaultHeader from '@/components/Header.vue'

@Component({
  name: 'default',
  components: {
    DefaultHeader
  }
})
export default class Default extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  background: #f1f1f1;
  padding: 65px 0 0;
  max-width: 100%;
  width: 100%;
}
</style>
