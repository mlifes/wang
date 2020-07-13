/**
  * @author wang.kt
  * @date 2020-06-08 21:06:38
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * 2020-06-08 21:06:38 wang.kt      初始化文档
  * ----------------------------------------------------
  * */
export default {
  name: 'kt-tabs',
  data () {
    return {
      // 默认初始值为 0
      currentIdx: 0,
      signSize: '',
      signTransform: '',
      signBar: '',
      signOpts: {
        isShow: true,
        color: '#009688',
        height: '3',
        idx: 0,
        ratio: 1,
        isTop: true
      },
      cw: '',
      len: ''
    }
  },
  props: {
    opts: {
      default: function () {
        return {}
      }
    }
  },
  computed: {
    signStyle: function () {
      return this.signSize + this.signTransform + this.signBar
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化参数
    init: function () {
      this.initOpts()

      this.initSignBarStyle()

      for (let i = 0; i < this.len; i++) {
        this.$children[i].style = 'width:' + this.cw + 'px;'
      }
    },

    // 初始化配置项
    initOpts: function () {
      this.len = this.$children.length

      this.cw = this.$el.clientWidth / this.len

      if (this.opts) {
        for (const key in this.opts) {
          this.signOpts[key] = this.opts[key]
        }
      }
    },
    initSignBarStyle: function () {
      if (!this.signOpts.isShow) {
        return
      }

      const ratio = parseInt((1 - this.signOpts.ratio) / 2 * 100)

      this.signBar = 'background: linear-gradient(to right,white ' + ratio + '%,' + this.signOpts.color + ' ' + ratio + '%,' + this.signOpts.color + ' ' + (100 - ratio) + '%,white ' + (100 - ratio) + '% );'

      let style = 'height:' + this.signOpts.height + 'px;width:' + this.cw + 'px;'

      style += this.signOpts.isTop ? 'top:0;' : 'bottom:0;'

      this.signSize = style

      this.slideTo(this.signOpts.idx, true)
    },
    // 绑定动画效果,此处对应sliders中的方法
    bindTransformAnim: function (data) {
      if (!this.signOpts.isShow) {
        return
      }
      const idx = parseInt(-data.dis)
      if (this.currentIdx === idx) {
        return
      }
      this.currentIdx = idx
      let transform = 'transform:translateX(' + -1 * data.dis * this.cw + 'px);'
      if (data.style) {
        transform += data.style
      }
      this.signTransform = transform
    },
    // tabs自己的滚动动画
    slideTo: function (index, disAnim) {
      if (!this.signOpts.isShow || this.currentIdx === index) {
        return
      }
      this.currentIdx = index
      let transform = 'transform:translateX(' + index * this.cw + 'px);'
      if (!disAnim) {
        transform += 'transition: transform 1s;'
      }
      this.signTransform = transform
    }
  }
}
