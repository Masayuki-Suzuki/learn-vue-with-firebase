<template lang="pug">
  .aceEditor
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import getCurretTime from '../lib/getCurrentTime'
import * as ace from 'brace'
import 'brace/mode/markdown'
import 'brace/theme/chrome'

// Interfaces
import Memo from '../interfaces/Memo'

@Component({
  name: 'AceEditor'
})
export default class AceEditor extends Vue {
  content: string = this.$store.getters.getMemo.markdown
  editor: any = {}

  get selectedIndex() {
    this.content = this.$store.getters.getMemo.markdown
    return this.$store.getters.getSelectedIndex
  }

  mounted() {
    this.editor = ace.edit(this.$el)
    this.editor.$blockScrolling = Infinity
    this.editor.getSession().setMode('ace/mode/markdown')
    this.editor.setTheme('ace/theme/chrome')
    this.editor.setValue(this.content, 1)

    this.editor.on('change', () => {
      this.content = this.editor.getValue()
      const memoData: Memo = {
        markdown: this.editor.getValue(),
        name: this.$store.getters.getMemo.name,
        createDate: this.$store.getters.getMemo.createDate,
        editDate: getCurretTime()
      }
      this.$store.commit('setMemoData', memoData)
    })
  }

  @Watch('content')
  onContentChange(val: string) {
    if (this.sync) {
      this.editor.setValue(val, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.aceEditor {
  height: 500px;
  width: 100%;
}
</style>
