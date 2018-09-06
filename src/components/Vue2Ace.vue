<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import * as ace from 'brace'
import 'brace/ext/emmet'

@Component({
  name: 'vue2ace',
  watch: {}
})
export default class Vue2Ace extends Vue {
  @Prop(String)
  value!: string
  @Prop(String)
  lang!: string
  @Prop(String)
  theme!: string
  @Prop()
  height: true
  @Prop()
  width: true
  @Prop(Object)
  options!: {}

  editor: unknown = null
  contentBackup: string = ''

  render(h) {
    const height = this.height ? this.px(this.height) : '100%'
    const width = this.width ? this.px(this.width) : '100%'
    return h('div', {
      attrs: {
        style: 'height: ' + height + '; width: ' + width
      }
    })
  }

  beforeDestroy() {
    this.editor.destroy()
    this.editor.container.remove()
  }

  mounted() {
    const vm = this
    const lang = this.lang || 'text'
    const theme = this.theme || 'chrome'

    const editor = (vm.editor = ace.edit(this.$el))

    this.$emit('init', editor)

    editor.$blockScrolling = Infinity
    editor.setOption('enableEmmet', true)
    editor.getSession().setMode('ace/mode/' + lang)
    editor.setTheme('ace/theme/' + theme)
    editor.setValue(this.value, 1)
    this.contentBackup = this.value

    editor.on('change', function() {
      const content = editor.getValue()
      vm.$emit('input', content)
      vm.contentBackup = content
    })
    if (vm.options) editor.setOptions(vm.options)
  }

  px(n) {
    if (/^\d*$/.test(n)) {
      return n + 'px'
    }
    return n
  }

  @Watch('value')
  value(val) {
    if (this.contentBackup !== val) {
      this.editor.setValue(val, 1)
      this.contentBackup = val
    }
  }

  @Watch('theme')
  theme(newTheme) {
    this.editor.setTheme('ace/theme/' + newTheme)
  }

  @Watch('lang')
  lang(newLang) {
    this.editor.getSession().setMode('ace/mode/' + newLang)
  }

  @Watch('options')
  options(newOption) {
    this.editor.setOptions(newOption)
  }

  @Watch('height')
  height() {
    this.$nextTick(function() {
      this.editor.resize()
    })
  }

  @Watch('width')
  width() {
    this.$nextTick(function() {
      this.editor.resize()
    })
  }
}
</script>
