/**
  * @author wang.kt
  * @date 2020-07-11 09:58:59
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * 2020-07-11 09:58:59 wang.kt      初始化文档
  * ----------------------------------------------------
  * */
import { mergeOpts } from '../../../utils/tool.utils'

function Refresh () {
  const sh = window.screen.availHeight || document.body.clientHeight
  this.msgHeight = 32
  this.iconHeight = 24
  this.minHeight = this.msgHeight + this.iconHeight / 2
  this.maxHeight = this.msgHeight + this.iconHeight
  this.onSubmitHeight = this.msgHeight + this.iconHeight * 1.5
  this.containerHeight = 2.5 * this.onSubmitHeight

  this.dis = 0

  // 计算距离
  this.computedHeight = function (dis) {
    // 当高度小于提交高度时，直接返回。大于提交高度时，按比率返回
    if (dis < this.onSubmitHeight) {
      return dis
    } else {
      return this.onSubmitHeight + (this.containerHeight / (sh - this.onSubmitHeight)) * (dis - this.onSubmitHeight)
    }
  }

  this.AnimTimer = (function () {
    // 定义动画持续的时长，3s = 30
    const limit = 3
    let isComplete = false
    let num = 0

    function animHandle (onComplete, onRefresh) {
      setTimeout(function () {
        num++
        if (num > limit) {
          num = 0
          if (isComplete) {
            // 结束时，重置方法并退出
            isComplete = false
            onComplete && onComplete()
            return
          }
        }
        const percent = parseInt(num / limit * 100)
        onRefresh && onRefresh(percent)
        animHandle(onComplete, onRefresh)
      }, 100)
    }

    return {
      start: function (onCallBack, onComplete, onRefresh) {
        isComplete = false
        onCallBack && onCallBack()
        animHandle(onComplete, onRefresh)
      },
      complete: function () {
        isComplete = true
      }
    }
  }())
}

function LoadMore () {
  const sh = window.screen.availHeight || document.body.clientHeight
  this.msgHeight = 32
  this.onSubmitHeight = 2 * this.msgHeight
  this.containerHeight = 2.5 * this.onSubmitHeight
  this.dis = 0

  this.computedHeight = function (dis) {
    // 当高度小于提交高度时，直接返回。大于提交高度时，按比率返回
    if (dis < this.onSubmitHeight) {
      return dis
    } else {
      return this.onSubmitHeight + (this.containerHeight / (sh - this.onSubmitHeight)) * (dis - this.onSubmitHeight)
    }
  }
  this.AnimTimer = (function () {
    let completeHandle = null
    return {
      start: function (onCallBack, onComplete) {
        completeHandle = onComplete
        onCallBack && onCallBack()
      },
      complete: function () {
        completeHandle && completeHandle()
      }
    }
  }())
}

export default {
  name: 'kt-scroll',
  data () {
    return {
      default: {
        x: 'scrollToX',
        y: 'scrollToY'
      },
      sclass: '',
      scrollBeginY: '',
      myRefresh: null,
      myLoadMore: null,
      myOpts: {
        canRefresh: false,
        canLoadMore: false,
        showBackTop: true, // 显示返回顶部
        noData: false
      },
      touchStatus: 0 // 0表示没有重新计算、1表示重新计算高度: 在滑动过程中，只允许被触发一次，之后重置
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
    console.log('scroll')
  },
  destroyed () {
    console.log('destroyed')
    if (this.opts.showBackTop) this.$ktScrollTop.unbind()
  },
  methods: {
    init: function () {
      // 初始化样式
      if (this.default[this.scroll]) {
        this.sclass = this.default[this.scroll]
      }
      this.canRefreshAndLoadMore()
    },
    canTouch: function () {
      return this.opts.canRefresh || this.opts.canLoadMore
    },
    isRefresh: function () {
      return this.$el.scrollTop <= 0
    },
    isLoadMore: function () {
      return this.$el.scrollTop >= (this.$el.scrollHeight - this.$el.clientHeight)
    },
    touchstart: function (event) {
      if (!this.canTouch()) {
        return
      }
      this.scrollBeginY = event.touches[0].clientY
      this.touchStatus = 0
    },
    touchend: function (event) {
      if (this.opts.showBackTop) this.$ktScrollTop.bindTouchend(this)
      if (!this.canTouch()) {
        return
      }
      /**
       * 1、判断当前状态是下拉刷新还是上拉加载
       * 2、下拉刷新时，判断结束位置是否大于设置的值，大于则执行onSubmitRefresh方法
       * 3、上拉加载时，判断结束位置是否大于设置的值，大于则执行onSubmitLoadMore方法
       * */
      let dis = this.myRefresh.dis
      if (this.opts.canRefresh && this.isRefresh() && dis > 0) {
        // 当下拉刷新时，执行
        this.myRefresh.dis = 0
        this.touchEndRefresh(dis)
      }

      dis = this.myLoadMore.dis
      if (this.opts.canLoadMore && this.isLoadMore() && dis < 0) {
        // 当上拉加载时，执行
        this.myLoadMore.dis = 0
        this.touchEndLoadMore(dis)
      }
    },
    touchmove: function (event) {
      console.log(111)
      if (this.opts.showBackTop) this.$ktScrollTop.bindTouchmove(this)
      if (!this.canTouch()) {
        return
      }
      /**
     * 1、touchmove事件，当发现不是下拉刷新或者上拉加载的情况下，需要更新滚动开始位置
     * 2、当是下拉刷新时，计算拉动距离，并transform展示logo
     * 3、当是上拉加载时，计算拉动距离，并transform展示logo
     * */
      if (!this.isRefresh() && !this.isLoadMore()) {
      // 当滚动不是下拉或者上拉时，需要重置滚动开始位置
        console.log('refreshby:' + this.$el.scrollTop >= (this.$el.scrollHeight - this.$el.clientHeight))
        console.log('===============')
        console.log(this.$el.scrollTop + ': ' + this.$el.scrollHeight + ': ' + this.$el.clientHeight)
        console.log('===============')
        if (this.touchStatus === 0) {
          this.touchStatus = 1
          this.scrollBeginY = event.touches[0].clientY
        }
        return
      }

      const dis = event.touches[0].clientY - this.scrollBeginY

      if (this.opts.canRefresh && this.isRefresh() && dis > 0) {
      // 当下拉刷新时，执行
        this.myRefresh.dis = dis
        this.touchmoveRefresh(dis)
      }
      console.log(222 + ':' + dis)
      if (this.opts.canLoadMore && this.isLoadMore() && dis < 0) {
      // 当上拉加载时，执行
        this.myLoadMore.dis = dis
        this.touchmoveLoadMore(dis)
      }
    },
    touchmoveRefresh: function (dis) {
      dis = this.myRefresh.computedHeight(dis)
      this.$refs.refresh.style = 'height:' + dis + 'px;'
      if (dis > this.myRefresh.minHeight) {
        // 此处主要设置icon的动画，支持最小12px到最大24px的变化
        if (dis > this.myRefresh.maxHeight) {
          dis = this.myRefresh.maxHeight
        }
        const h = dis - this.myRefresh.msgHeight
        this.$refs.refreshicon.style = 'font-size:' + h + 'px;height:' + h + 'px;'
      }
    },
    /**
     * 滑动结束的刷新方法
     * 1、当下拉刷新距离过长时，恢复到正常大小
     * 2、执行动画
     */
    touchEndRefresh: function (dis) {
      dis = this.myRefresh.computedHeight(dis)
      const that = this
      if (dis < this.myRefresh.onSubmitHeight) {
        // 直接隐藏
        that.closeRefreshAnim()
        return
      }
      this.myRefresh.AnimTimer.start(function () {
        // callback回调,恢复到正常大小
        that.showNomalRefresh()
        // 调用onSubmit方法
        that.onSubmitRefresh()
      }, function () {
        // complete回调
        that.closeRefreshAnim()
      })
      setTimeout(function () {
        that.myRefresh.AnimTimer.complete()
      }, 3000)
    },
    // 恢复到正常大小
    showNomalRefresh: function () {
      this.$refs.refresh.style = 'height:' + this.myRefresh.onSubmitHeight + 'px;transition:height .8s;'
    },
    // 关闭动画
    closeRefreshAnim: function () {
      const delay = 1
      this.$refs.refresh.style = 'height:0;transition:height ' + delay + 's;'
      this.$refs.refreshicon.style = 'height:' + this.myRefresh.iconHeight / 2 + 'px;font-size:' + this.myRefresh.iconHeight / 2 + 'px;transition: all ' + 0.27 * delay + 's;'
    },
    touchmoveLoadMore: function (dis) {
      dis = this.myLoadMore.computedHeight(-dis)
      console.log(dis)
      this.$refs.loadmore.style = 'height:' + dis + 'px;'
      this.scrollBottom()
    },
    showNomalLoadMore: function () {
      this.$refs.loadmore.style = 'height:' + this.myLoadMore.onSubmitHeight + 'px;transition:height .8s;'
    },
    touchEndLoadMore: function (dis) {
      dis = this.myLoadMore.computedHeight(-dis)
      const that = this
      if (dis < this.myLoadMore.onSubmitHeight) {
        // 直接隐藏
        that.closeLoadMoreAnim()
        return
      }
      this.myLoadMore.AnimTimer.start(function () {
        // callback回调,恢复到正常大小
        that.showNomalLoadMore()
        // 调用onSubmit方法
        that.onSubmitLoadMore()
      }, function () {
        that.closeLoadMoreAnim()
      })
      setTimeout(function () {
        that.myLoadMore.AnimTimer.complete()
      }, 3000)
    },
    // 关闭动画,隐藏并滚动到特定位置
    closeLoadMoreAnim: function () {
      this.$refs.loadmore.style = 'height:0;transition:height 1s;'
    },
    scrollBottom: function () {
      this.$el.scrollTop = (this.$el.scrollHeight - this.$el.clientHeight)
    },
    canRefreshAndLoadMore: function () {
      mergeOpts(this.opts, this.myOpts)

      if (this.canTouch()) {
        // 初始化配置
        this.myRefresh = new Refresh()
        this.myLoadMore = new LoadMore()
      }
    },
    // 提交刷新接口
    onSubmitRefresh: function () {
      // 提交父组件刷新接口: @onRefresh = "onRefresh(complete)"
      const that = this
      that.$emit('onRefresh', function () {
        that.myRefresh.AnimTimer.complete()
      })
    },
    // 提交加载接口
    onSubmitLoadMore: function () {
      // 提交父组件加载更多接口: @onLoadMore = "onLoadMore(complete)"
      const that = this
      this.$emit('onLoadMore', function () {
        that.myLoadMore.AnimTimer.complete()
      })
    }
  }
}
