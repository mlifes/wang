/**
  * @author your name
  * @date 2020-06-05 18:19:32
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * 2020-06-05 18:19:32 your name      初始化文档
  * ----------------------------------------------------
  * */
export default {
  name: 'kt-header',
  mounted () {
    this.init()
  },
  methods: {
    init: function () {
      for (let i = 0, len = this.$parent.$children.length; i < len; i++) {
        if (this.$parent.$children[i].$options._componentTag === 'kt-content') {
          this.$parent.$children[i].ktContentClass += 'has-header '
          return
        }
      }
    }
  }
}
