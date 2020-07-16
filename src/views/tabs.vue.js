/**
 * @author your name
 * @date 2020-06-05 12:11:37
 * @version 1.0
 * @description 功能描述
 * ----------------------------------------------------
 * date          author         desc
 * 2020-06-05 12:11:37 your name      初始化文档
 * ----------------------------------------------------
 * */

export default {
  name: 'tabs',
  data () {
    return {
      tabsPaths: {
        '/': 0,
        '/work': 1,
        '/unvi': 2,
        '/person': 3
      },
      tabsOpts: {
        isShow: false
      },
      idx: 0
    }
  },
  created () {

  },
  mounted () {
    this.init()
  },
  methods: {
    init: function () {
      this.idx = this.tabsPaths[this.$route.path]
    },
    onTabClick: function (index, name) {
      if (this.idx === index) {
        return
      }
      this.idx = index
      this.$router.push(name)
    }
  }
}
