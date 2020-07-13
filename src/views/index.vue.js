/**
  * @author wang.kt
  * @date 2020-07-13 14:33:48
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * 2020-07-13 14:33:48 wang.kt      初始化文档
  * ----------------------------------------------------
  * */
export default {
  name: 'index',
  data () {
    return {
      tabsOpts: {
        ratio: 0.5,
        color: '#673ab7',
        idx: 0
      },
      idx: 0,
      pageArgs: ['/', '/work', '/unvi', '/person']
    }
  },
  created () {

  },
  mounted () {
    this.$nextTick(function () {
      this.initIdx()
    })
  },
  methods: {
    initIdx: function () {
      const that = this
      that.pageArgs.map(function (cur, idx) {
        if (cur === that.$route.path) {
          that.tabsOpts.idx = that.idx = idx
        }
      })
    },
    onTabClick: function (index) {
      if (this.idx === index) {
        return
      }
      this.idx = index
      this.$refs.ktTabs.slideTo(index)
      this.$router.push(this.pageArgs[this.idx])
    }
  }
}
