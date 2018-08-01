<template lang="pug">
  #editor
    h1 エディター画面
    p {{ user.displayName }}
    .logout
      button(@click="logout") ログアウト
    .editorWrapper
      textarea.markdown(v-model="markdown")
      .preview(v-html="preview()")
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import marked from 'marked'
  import firebase from 'firebase'

  @Component
  export default class Editor extends Vue {
    @Prop({}) user: unknown
    markdown: string = ''

    logout(): void {
      firebase.auth().signOut()
    }
    preview(): string {
      return marked(this.markdown)
    }
  }
</script>

<style lang="scss" scoped>
  .editorWrapper {
    display: flex;
  }
  .markdown {
    height: 500px;
    width: 50%;
  }
  .preview {
    text-align: left;
    width: 50%;
  }
</style>