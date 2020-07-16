/**
 * @author wang.kt
 * @date 2020-06-08 10:12:06
 * @version 1.0
 * @description 功能描述
 * ----------------------------------------------------
 * date          author         desc
 * 2020-06-08 10:12:06 wang.kt      初始化文档
 * ----------------------------------------------------
 * */
export default {
  name: 'kt-app',
  mounted () {
    this.onReSizeLisenter()
  },
  methods: {
    onReSizeLisenter: function () {
      const that = this
      window.onresize = function () {
        that.$forceUpdate()
      }
    }
  }
}
