/**
  * @author wang.kt
  * @date 2020-06-08 21:07:07
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * 2020-06-08 21:07:07 wang.kt      初始化文档
  * ----------------------------------------------------
  * */
export default {
  name: 'kt-tab',
  data () {
    return {
      style: ''
    }
  },
  mounted () {
    this.refreshTabs()
  },
  methods: {
    refreshTabs: function () {
      // 此处添加的目的时刷新父tabs的样式
      if (this.$parent.$options._componentTag === 'kt-tabs' && this.$parent.hasInit) {
        this.$parent.init()
      }
    }
  }
}
