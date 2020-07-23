/**
  * @author wang.kt
  * @date 2020-07-19 18:45:50
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * 2020-07-19 18:45:50 wang.kt      初始化文档
  * ----------------------------------------------------
  * */
import Vue from 'vue'

export default {
  name: 'kt-confirm',
  data () {
    return {
      title: '',
      msg: '',
      cancelText: '',
      submitText: '',
      isTemplate: false,
      cancelFn: null,
      submitFn: null,
      optsClass: '',
      isShow: false
    }
  },
  methods: {
    show ({ title, msg, component, optsClass, cancelText, submitText, cancelFn, submitFn }) {
      this.title = title || '确认框'
      this.msg = msg || '欢迎来到知识的荒原···'
      this.cancelText = cancelText || '取消'
      this.submitText = submitText || '确认'
      this.optsClass = optsClass || ''
      this.cancelFn = cancelFn
      this.submitFn = submitFn
      this.isTemplate = false
      this.isShow = true
      if (component) {
        this.isTemplate = true
        this.buildAlertComponent(component)
      }
    },
    hide () {
      this.isShow = false
      this.cbFn && this.cbFn()
    },
    cancel () {
      this.isShow = false
      this.cancelFn && this.cancelFn()
    },
    submit () {
      this.isShow = false
      this.submitFn && this.submitFn()
    },
    buildAlertComponent (components) {
      const ConfirmComponent = Vue.extend(components)

      this.$nextTick(function () {
        new ConfirmComponent().$mount(this.$refs.ktConfirmContentSolt)
      })
    }
  }
}
