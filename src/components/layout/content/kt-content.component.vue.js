/**
 * @author your name
 * @date 2020-06-08 09:59:15
 * @version 1.0
 * @description 功能描述
 * ----------------------------------------------------
 * date          author         desc
 * 2020-06-08 09:59:15 your name      初始化文档
 * ----------------------------------------------------
 * */

export default {
  name: 'kt-content',
  data () {
    return {
      ktContentClass: ''
    }
  },
  props: {
    scroll: {
      default: function () {
        return ''
      }
    },
    opts: {
      default: function () {
        return {}
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init: function () {
      if (this.$parent.$options._componentTag === 'kt-app') {
        for (let i = 0, len = this.$parent.$children.length; i < len; i++) {
          if (this.$parent.$children[i].$options._componentTag === 'kt-header') {
            this.ktContentClass += 'has-header '
          }
        }
      }
    }
  }
}
