/**
  * @author wang.kt
  * @date 2020-06-15 17:25:38
  * @version 1.0
  * @description 功能描述 是否进行懒加载，在视口范围内可见时，加载
  * 当需要lazyload时，其父组件必须是kt-scorll或者kt-content,否则无法做到滚动监听
  * ----------------------------------------------------
  * date          author         desc
  * 2020-06-15 17:25:38 wang.kt      初始化文档
  * ----------------------------------------------------
  * */
import { throttle } from '../../../utils/tool.utils'
import def from '../../../assets/components/unit/img/def.png'

export default {
  name: 'kt-img',
  data () {
    return {
      lazyHandle: null
    }
  },
  props: {
    src: {
      type: String,
      default: function () {
        return ''
      }
    },
    errSrc: {
      type: String,
      default: function () {
        return def
      }
    },
    defSrc: {
      type: String,
      default: function () {
        return def
      }
    },
    delay: {
      type: Boolean,
      default: function () {
        return true
      }
    }
  },
  created () {
    this.ktImg = this.defSrc
    this.$nextTick(() => {
      const that = this
      if (that.delay) {
        that.lazyHandle = throttle(function () {
          that.refresh()
        }, 200)
        that.$parent.$el.addEventListener('scroll', that.lazyHandle)
      }
      that.refresh()
    })
  },
  mounted () {

  },
  methods: {
    refresh: function () {
      const that = this
      if (!that.delay) {
        that.ktImg = that.src
        const img = that.$el.children[0]
        img.onerror = function () {
          that.ktImg = that.errSrc
          that.$forceUpdate()
        }
      } else {
        const rect = that.$el.getBoundingClientRect()
        const dx = rect.x ? rect.x : rect.left
        const dy = rect.y ? rect.y : rect.top
        if ((dx > 0 && dx < window.innerWidth) ||
          (dy > 0 && dy < window.innerHeight)) {
          // 解除绑定
          console.log('unbind')
          that.$parent.$el.removeEventListener('scroll', that.lazyHandle)
          that.ktImg = that.src
          that.$forceUpdate()
          const img = that.$el.children[0]
          img.onerror = function () {
            that.ktImg = that.errSrc
            that.$forceUpdate()
          }
        }
      }
    }
  }
}
