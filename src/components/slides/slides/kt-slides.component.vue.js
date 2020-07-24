/**
 * @author wang.kt
 * @date 2020-06-08 21:04:47
 * @version 1.0
 * @description 功能描述
 * ----------------------------------------------------
 * date          author         desc
 * 2020-06-08 21:04:47 wang.kt      初始化文档
 * ----------------------------------------------------
 * */
export default {
  name: 'kt-slides',
  data () {
    return {
      baseStyle: '',
      transformStyle: '',
      pageStyle: '',
      size: {},
      pages: [],
      currentIndex: 0,
      slideToX: false, // 是否沿着x轴方向滑动，仅当为true时滑动，并禁止y轴滑动，反之亦然
      xLimit: 0.1, // x轴滑动的百分比
      len: 0,
      myOpts: {
        auto: false,
        distance: 0.2,
        showPage: false
      },
      touch: {
        sx: 0,
        sy: 0,
        xdis: 0,
        ydis: 0,
        xt: 0,
        yt: 0
      }
    }
  },
  props: {
    opts: {
      default: function () {
        return {}
      }
    }
  },
  mounted () {
    this.init()
  },
  computed: {
    style: function () {
      return this.baseStyle + this.transformStyle
    }
  },
  methods: {
    init: function () {
      // 初始化配置
      for (const key in this.opts) {
        this.myOpts[key] = this.opts[key]
      }
      this.size.width = this.$el.clientWidth
      this.initSlideStyle()
    },
    initSlideStyle: function () {
      if (this.len > 0) {
        return
      }
      this.len = this.$children.length
      for (let i = 0; i < this.len; i++) {
        const slide = this.$children[i].$el
        slide.style = 'width:' + this.size.width + 'px'
        this.pages.push(i)
      }
      this.baseStyle = 'height:100%;width:' + (this.size.width * this.len) + 'px;'
      this.pageStyle = 'width:' + (25 * this.len) + 'px'
    },
    /**
     * 滚动到某页面
     * @param {number} index id
     * @param {number} dis 当前距离
     */
    slideTo: function (index, dis) {
      let style = ''
      if (this.currentIndex !== index) {
        this.currentIndex = index
        style = 'transition: transform 1s;'
        this.$EventBusDispatcer.dispatchs.scrollHide()
      } else {
        const s = Math.abs(dis / this.size.width)
        style = 'transition: transform ' + s + 's;'
      }
      this.slide(-this.currentIndex * this.size.width, style)
    },
    slide: function (dis, style) {
      this.initSlideStyle()
      let transform = 'transform:translateX(' + dis + 'px);'
      if (style) {
        transform += style
      }
      this.transformStyle = transform
      this.$emit('onSlidingTransformAnim', { dis: dis / this.size.width, style: style })
    },
    touchstart: function (event) {
      this.touch.sx = event.touches[0].clientX
      this.touch.xdis = 0
    },
    touchend: function (event) {
      // 判断distances是否
      const limit = this.size.width * this.myOpts.distance
      let tempIndex = this.currentIndex
      if (this.touch.xdis > limit) {
        tempIndex--
      } else if (this.touch.xdis < -limit) {
        tempIndex++
      }
      this.slideTo(tempIndex, this.touch.xdis)

      if (this.slideToX) {
        // 当沿x轴滚动时，禁止事件冒泡
        event.preventDefault()
        event.stopPropagation()
      }

      this.slideToX = false
    },
    touchmove: function (event) {
      const xdis = event.touches[0].clientX - this.touch.sx

      if (Math.abs(xdis) > this.xLimit * this.size.width) {
        this.slideToX = true
      }

      if (this.slideToX) {
        // 当沿x轴滚动时，禁止事件冒泡
        event.preventDefault()
        event.stopPropagation()
      } else {
        return
      }

      this.touch.xdis = xdis

      if (this.currentIndex < 1 && this.touch.xdis > 0) {
        this.touch.xdis = 0
      } else if (this.currentIndex === this.$children.length - 1 && this.touch.xdis < 0) {
        this.touch.xdis = 0
      }

      this.touch.xt = -this.currentIndex * this.size.width + this.touch.xdis

      this.slide(this.touch.xt)
    }
  }
}
