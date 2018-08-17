<template lang="pug">
  div
    Home(v-if="!this.$store.state.isLogin")
    Editor(v-if="this.$store.state.isLogin")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Home from '@/components/Home.vue'
import Editor from '@/components/Editor.vue'

@Component({
  name: 'home',
  components: {
    Editor,
    Home
  },
  layout: 'default'
})
export default class Index extends Vue {}
</script>
