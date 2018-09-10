<template lang="pug">
  .editor
    h2 エディター画面
    //.editor__wrapper
    v-card
      v-layout(row fill-height justify-space-around)
        v-flex(xs2)
          v-list.memoList
            template(v-for="(memo, index) in memos")
              v-list-tile(@click="selectMemo(index)" :data-selected="index == selectedIndex")
                v-list-tile-title {{ memo.name }}.md
          v-divider
          v-btn(@click="addMemo" flat) メモの追加
        v-flex
          v-flex(xs6)
            ace-editor
          v-flex(xs6)
            .preview(v-html="preview()")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from 'firebase'
import marked from 'marked'
import aceEditor from './AceEditor.vue'

import Memo from '../interfaces/Memo'

@Component({
  name: 'editor',
  layout: 'default',
  components: {
    aceEditor
  }
})
export default class Editor extends Vue {
  // private memos: Memos[] = [{ markdown: '' }]
  // private selectedIndex: number = 0

  get memos(): Memo[] {
    return this.$store.getters.getMemos
  }
  get memo(): Memo {
    return this.$store.getters.getMemo
  }
  get selectedIndex(): number {
    return this.$store.getters.getSelectedIndex
  }

  addMemo() {
    this.$store.dispatch('createNewMemo')
  }
  selectMemo(index: number) {
    this.$store.commit('setSelectedIndex', index)
  }
  preview() {
    return marked(this.$store.getters.getMemo.markdown)
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
.memoList {
  &[data-selected='true'] {
    background: #f1f1f1;
  }
}
</style>
