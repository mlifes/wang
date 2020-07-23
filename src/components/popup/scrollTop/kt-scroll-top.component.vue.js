/**
  * @author wang.kt
  * @date 2020-07-19 18:44:51
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * 2020-07-19 18:44:51 wang.kt      初始化文档
  * ----------------------------------------------------
  * */
import { animLinear } from '../../../utils/anim.utils'

function KtScrollTop (component, opts) {
  this.parent = component.$el
  this.tag = component.$vnode.tag

  this.isEnabled = true
  this.isShow = false
  this.opts = opts
  this.bottom = 0
  this.icon = 'backtop'
  this.dis = 0
  this.timeHandle = null
}

export default {
  name: 'kt-scroll-top',
  data () {
    return {
      parents: {},
      hasBind: false
    }
  },
  mounted () {
    const that = this
    that.$EventBusDispatcer.register(that.$EventBusType.SCROLL_HIDE, function () {
      that.unbind()
    })
  },
  methods: {
    bind: function ($parent, $opts) {
      // 重置
      this.parents = new KtScrollTop($parent, $opts)
      this.initData()
      this.hasBind = true
    },
    unbind: function () {
      this.hideAnim(0)
    },
    initData: function () {
      // 初始化参数
      const rect = this.parents.parent.getBoundingClientRect()
      this.parents.bottom = (window.innerHeight || window.document.clientHeight) - rect.bottom + 10
      this.parents.dis = this.parents.parent.clientHeight / 2

      if (this.parents.opts) {
        this.parents.icon = typeof this.parents.opts === 'string' ? this.parents.opts : this.parents.opts.icon
        this.parents.dis = this.parents.opts.dis || this.parents.dis
      }
      this.$el.style = 'right:-1000px;'
    },
    bindTouchmove: function ($parent, $opts, event) {
      if (!this.hasBind) {
        this.bind($parent, $opts)
      }
      if (this.parents.parent.scrollTop > this.parents.dis && !this.parents.isShow) {
        this.showAnim()
      }

      if (this.parents.parent.scrollTop === 0 && this.parents.isShow) {
        // 滚动到顶部时直接隐藏
        this.hideAnim(0)
      }
    },
    bindTouchend: function ($parent, $opts, event) {
      if (this.parents.isShow) {
        this.hideAnim(3)
      }
    },
    showAnim: function () {
      this.$el.style = 'bottom:' + this.parents.bottom + 'px;right:10px;opacity: 1;transition: opacity 1s;'
      this.parents.isShow = true
    },
    hideAnim: function (delay) {
      const that = this
      if (that.parents.timeHandle) clearTimeout(that.parents.timeHandle)
      that.parents.timeHandle = setTimeout(() => {
        that.$el.style = 'bottom:' + that.parents.bottom + 'px;right:-1000px;'
        that.parents.isShow = false
        that.hasBind = false
      }, delay * 1000)
    },
    onClick: function () {
      // 滚动到顶部
      const that = this
      const temDis = that.parents.parent.scrollTop
      animLinear(that.parents.parent, temDis, 0.5, dis => {
        that.parents.parent.scrollTop = temDis - dis
        if (that.parents.parent.scrollTop === 0) {
          if (that.parents.isShow) {
            that.hideAnim(0.5)
          }
        }
      })
    }
  }
}
