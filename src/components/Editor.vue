<template lang="pug">
  #editor
    h1 エディター画面
    p {{ user.displayName }}
    .logout
      button(@click="logout") ログアウト
    .container
      .momoListWrapper
        .memoList(v-for="(memo, index) in memos" @click="selectMemo(index)" :data-selected="index == selectedIndex")
          p.memoTitile {{ displayTitle(memo.markdown) }}
        .memoListBtn
          button.addMemoBtn(@click="addMemo") メモの追加
      .editorWrapper
        textarea.markdown(v-model="memos[selectedIndex].markdown")
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
    memos = [{ markdown: '' }]
    selectedIndex: number = 0

    logout(): void {
      firebase.auth().signOut()
    }

    preview(): string {
      return marked(this.memos[this.selectedIndex].markdown)
    }

    addMemo(): void {
      this.memos.push({
        markdown: '無題のメモ',
      })
    }

    selectMemo(index: number): void {
      this.selectedIndex = index
    }


    displayTitle(text: string): string {
      return text.split(/\n/)[0]
    }

  }
</script>

<style lang="scss" scoped>
  p {
    margin: 0;
  }
  .container {
    display: flex;
    justify-content: space-between;
    margin: 20px auto;
    max-width: 1240px;
    width: 95%;
  }
  .momoListWrapper {
    border-top: solid 1px #333;
    width: 18%;
  }
  .memoList {
    border-bottom: solid 1px #333;
    box-sizing: border-box;
    padding: 10px;
    &:nth-of-type(even) {
      background: #ccc;
    }
    &[data-selected="true"] {
      background: #eef;
    }
  }
  .memoTitle {
    margin: 0;
    height: 1.5em;
    overflow: hidden;
    white-space: nowrap;
  }
  .addMemoBtn {
    margin: 20px 0 0;
  }
  .editorWrapper {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }
  .markdown {
    height: 500px;
    width: 48%;
  }
  .preview {
    text-align: left;
    width: 48%;
  }
</style>
