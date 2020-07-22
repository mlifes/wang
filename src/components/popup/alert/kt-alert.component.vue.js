/**
  * @author wang.kt
  * @date 2020-07-19 18:45:19
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * 2020-07-19 18:45:19 wang.kt      初始化文档
  * ----------------------------------------------------
  * */
export default {
  name: 'kt-alert',
  data () {
    return {
      title: '',
      msg: '',
      btnText: '',
      cbFn: null,
      isShow: false
    }
  },
  methods: {
    show (title, msg, btnText, cbFn) {
      this.title = title || '提示信息'
      this.msg = msg || '您来到了没有信息的星球荒原'
      this.btnText = btnText || '流浪'
      this.cbFn = cbFn
      // 显示弹窗动画

      this.isShow = true
    },
    hide () {
      this.isShow = false
      this.cbFn && this.cbFn()
    }
  }
}
