<template lang="pug">
  .editor
    h2 エディター画面
    //.editor__wrapper
    v-card
      v-layout(row fill-height justify-space-around)
        v-flex(xs6)
          v-textarea.markdown(v-model="markdown" label="markdown" rows="19" box)
        v-flex(xs6)
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
  margin: 10px auto 0;
  h2 {
    font-size: 2.4rem;
    margin: 0 0 10px;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    height: 300px;
    margin: 0 auto;
    width: 98%;
  }
}
.v-card {
  margin: 0 auto;
  padding: 10px;
  height: 400px;
  width: 98%;
}

.preview {
  font-size: 1.4rem;
  line-height: 1.6;
  text-align: left;
  padding: 0 10px;
  height: 100%;
  width: 100%;
  overflow: auto;
}
.markdown {
  font-size: 1.4rem;
  height: 100%;
  width: 100%;
}
</style>
