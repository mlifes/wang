/**
  * @author wang.kt
  * @date 2020-07-16 21:48:35
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * 2020-07-16 21:48:35 wang.kt      初始化文档
  * ----------------------------------------------------
  * */
export default {
  name: 'kt-icon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconHref: function () {
      return '#icon-' + this.name
    }
  }
}
