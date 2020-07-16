/**
  * @author wang.kt
  * @date 2020-06-08 21:06:38
  * @version 1.0
  * @description 功能描述，tabs:一个高度占比100%的滑轨及提供滑动条动画效果的组件
  * 1、可以设置是否显示滑动条
  * 2、可以设置滑动条的高度、颜色和初始序号
  * 3、可以设置滑动条的长度占tab的宽度的占比
  * 4、可以设置滑动条是显示在tabs组件的头部还是底部
  *
  * 5、提供与slides动画相绑定的接口
  * 6、提供滑动到某个tab的接口
  *
  * 7、支持设置tab的最小宽度，当超过时，tabs自适应滑动
  * ----------------------------------------------------------------
  * date          author         desc
  * 2020-06-08    wang.kt      初始化文档
  * 2020-07-15    wang.kt      支持设置tab的最小宽度，当超过时，tabs自适应滑动
  * ----------------------------------------------------------------
  * */
import { mergeOpts } from '../../../utils/tool.utils'
import { animLinear } from '../../../utils/anim.utils'

export default {
  name: 'kt-tabs',
  data () {
    return {
      hasInit: false, // tabs是否已经初始化
      scrollX: false, // 是否需要沿X轴滚动
      railStyle: '', // 导轨样式
      currentIdx: 0, // 当前idx
      signSize: '', // 滑动条大小
      signTransform: '', // 滑动条转换
      signBar: '', // 滑动条
      signOpts: {
        isShow: true, // 是否显示
        minWidth: 88, // 最小宽度
        color: '#009688', // 默认颜色
        height: '3', // 默认高度
        idx: 0, // 默认idx
        ratio: 1, // 显示比率
        isTop: true // 是否顶部显示
      },
      cw: '', // tab宽度
      len: '' // tab数量
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
    console.log('tabs')
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
      this.hasInit = true
    },

    // 初始化配置项
    initOpts: function () {
      mergeOpts(this.opts, this.signOpts)

      this.len = this.$children.length
      this.cw = this.$el.clientWidth / this.len

      if (this.cw < this.opts.minWidth) {
        this.cw = this.opts.minWidth
        this.initRailStyle()
      }
    },
    initRailStyle: function () {
      this.scrollX = true
      this.railStyle = 'width:' + this.len * this.cw + 'px;'
    },
    initSignBarStyle: function () {
      if (!this.opts.isShow) {
        return
      }

      const ratio = parseInt((1 - this.opts.ratio) / 2 * 100)

      this.signBar = 'background: linear-gradient(to right,white ' + ratio + '%,' + this.opts.color + ' ' + ratio + '%,' + this.opts.color + ' ' + (100 - ratio) + '%,white ' + (100 - ratio) + '% );'

      let style = 'height:' + this.opts.height + 'px;width:' + this.cw + 'px;'

      style += this.opts.isTop ? 'top:0;' : 'bottom:0;'

      this.signSize = style

      this.slideTo(this.opts.idx, true)
    },
    // 绑定动画效果,此处对应sliders中的方法
    bindTransformAnim: function (data) {
      if (!this.opts.isShow) {
        return
      }
      let transform = 'transform:translateX(' + (-data.dis * this.cw) + 'px);'
      if (data.style) {
        // 此处判断是否有过度动画，有过度动画表示滚动结束，则需要更新idx
        transform += data.style
        this.currentIdx = parseInt(-data.dis)
        this.$emit('onTabsIndexChange', this.currentIdx)
      }
      this.signTransform = transform
      this.tabSlideAnim()
    },
    // tabs自己的滚动动画
    slideTo: function (index, disAnim) {
      if (!this.opts.isShow || this.currentIdx === index) {
        return
      }
      this.currentIdx = index
      let transform = 'transform:translateX(' + index * this.cw + 'px);'
      if (!disAnim) {
        transform += 'transition: transform 1s;'
      }
      this.$emit('onTabsIndexChange', this.currentIdx)
      this.signTransform = transform
      this.tabSlideAnim()
    },
    /**
     * tab滑动动画
     */
    tabSlideAnim: function () {
      const that = this
      if (that.scrollX) {
        const middle = (that.$el.clientWidth - that.cw) / 2
        const cx = that.currentIdx * that.cw
        const cLeft = that.$refs.tabsRef.scrollLeft

        animLinear(that.$refs.tabsRef, cx - middle - cLeft, 1, function (dis) {
          that.$refs.tabsRef.scrollLeft = cLeft + dis
        })
      }
    }
  }
}
