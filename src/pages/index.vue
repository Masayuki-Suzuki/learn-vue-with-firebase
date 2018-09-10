<template lang="pug">
  #index
    Home(v-if="!this.$store.getters.isLogin")
    Editor(v-if="this.$store.getters.isLogin")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Home from '@/components/Home.vue'
import Editor from '@/components/Editor.vue'

@Component({
  name: 'index',
  components: {
    Editor,
    Home
  },
  layout: 'default'
})
export default class Index extends Vue {}
</script>
