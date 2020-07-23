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
import Vue from 'vue'

export default {
  name: 'kt-alert',
  data () {
    return {
      title: '',
      msg: '',
      btnText: '',
      cbFn: null,
      isTemplate: false,
      optsClass: '',
      isShow: false
    }
  },
  methods: {
    show ({ title, msg, template, optsClass, btnText, cbFn }) {
      this.title = title || '提示信息'
      this.msg = msg || '欢迎来到知识的荒原···'
      this.btnText = btnText || '后浪'
      this.optsClass = optsClass || ''
      this.cbFn = cbFn
      this.isShow = true
      this.isTemplate = false
      if (template) {
        this.isTemplate = true
        this.buildAlertComponent(template)
      }
    },
    hide () {
      this.isShow = false
      this.cbFn && this.cbFn()
    },
    buildAlertComponent (template) {
      const AlertComponent = Vue.extend({
        template: '<div class="kt-alert-content">' + template + '</div>'
      })

      this.$nextTick(function () {
        new AlertComponent().$mount(this.$refs.ktAlertContentSolt)
      })
    }
  }
}
