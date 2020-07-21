/**
  * @author wang.kt
  * @date 2020-07-19 18:46:24
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * 2020-07-19 18:46:24 wang.kt      初始化文档
  * ----------------------------------------------------
  * */
export default {
  name: 'kt-popup',
  data () {
    return {
      isShow: false,
      myOpts: {
        height: 0.5,
        dismiss: true
      },
      template: 'JUST A TEST'
    }
  },
  methods: {
    /**
     * 显示接口
     * @param {*} template html
     * @param {*} scope 该html对应的作用域，提供一些方法
     * @param {*} opts 配置
     */
    show (template, scope, opts) {
      this.reset()
      this.template = template
      scope.apply(this)
      for (const key in opts) {
        this.myOpts[key] = opts
      }
      this.isShow = true
    },
    hide () {
      this.reset()
      this.isShow = false
    },
    dismiss () {
      if (!this.myOpts.dismiss) {
        return
      }
      this.reset()
      this.isShow = false
    },
    reset () {
      this.template = ''
      this.myOpts = {
        height: 0.5,
        dismiss: true
      }
    }
  }
}
