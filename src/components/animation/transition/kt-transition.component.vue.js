/**
  * @author wang.kt
  * @date 2020-07-09 09:53:52
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * 2020-07-09 09:53:52 wang.kt      初始化文档
  * ----------------------------------------------------
  * */

export default {
  name: 'kt-transition',
  data () {
    return {
      ktTransitionName: '',
      toBack: false
    }
  },
  props: {
    rootRouter: {
      type: String,
      default: function () {
        return '/'
      }
    }
  },
  watch: {
    $route (to, from) {
      // 获取根路由this._routerRoot.$route.path
      if (this.$router.isBack) {
        this.ktTransitionName = 'slide-left'
      } else {
        this.ktTransitionName = 'slide-right'
      }
      this.toBack = this.$router.isBack
      this.$router.isBack = false
    }
  },
  methods: {
    beforeEnter: function (el) {
      if (this.toBack) {
        // 当返回的情况下，历史页面的dom被插入到dom中。因此需要修改z-index
        el.style.zIndex = '-1'
      }
    },
    enter: function (el) {
    },
    afterEnter: function (el) {
      if (this.toBack) {
        // 当返回的情况下，历史页面的dom被插入到dom中。因此需要修改z-index
        el.style.zIndex = ''
      }
    },
    enterCancelled: function (el) {
    },
    beforeLeave: function (el) {
    },
    leave: function (el) {
    },
    afterLeave: function (el) {
    },
    leaveCancelled: function (el) {
    }
  }
}
