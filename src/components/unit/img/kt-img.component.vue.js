/**
  * @author wang.kt
  * @date 2020-06-15 17:25:38
  * @version 1.0
  * @description 功能描述 是否进行懒加载，在视口范围内可见时，加载
  * ----------------------------------------------------
  * date          author         desc
  * 2020-06-15 17:25:38 wang.kt      初始化文档
  * ----------------------------------------------------
  * */
import scorll from '../../../utils/scorll.utils'

import def from '../../../assets/components/unit/img/def.png'

export default {
  name: 'kt-img',
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
        scorll.attach(that.$parent.$el)
        scorll.bind(that, function () {
          that.refresh()
        })
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
          scorll.unbind(that)
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
