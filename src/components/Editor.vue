<template lang="pug">
  .editor
    h2 エディター画面
    .editor__wrapper
      textarea.markdown(v-model="markdown")
      .preview(v-html="preview()")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from 'firebase'
import marked from 'marked'

@Component({
  name: 'editor',
  layout: 'default'
})
export default class Editor extends Vue {
  private markdown: string = ''

  preview() {
    return marked(this.markdown)
  }
}
</script>

<style lang="scss" scoped>
.editor {
  margin: 20px auto 0;
  h2 {
    font-size: 2.4rem;
    margin: 0 0 20px;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    height: 500px;
    margin: 0 auto;
    width: 98%;
  }
}
.markdown,
.preview {
  font-size: 1.4rem;
  line-height: 1.6;
  text-align: left;
  width: 48%;
}
.markdown {
  border: solid 1px #ccc;
  border-radius: 5px;
  font-size: 1.4rem;
  padding: 10px;
}
</style>
