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
import Vue from 'vue'

export default {
  name: 'kt-popup',
  data () {
    return {
      isShow: false,
      myOpts: {
        height: 0.5,
        dismiss: true,
        class: ''
      }
    }
  },
  methods: {
    show ({ component, opts }) {
      this.reset()
      for (const key in opts) {
        this.myOpts[key] = opts
      }
      this.isShow = true
      this.buildPopupComponent(component)
    },
    hide () {
      this.reset()
      this.isShow = false
    },
    dismiss () {
      if (!this.myOpts.dismiss) {
        return
      }
      this.isShow = false
    },
    reset () {
      this.myOpts = {
        height: 0.5,
        dismiss: true,
        class: ''
      }
    },
    buildPopupComponent (component) {
      const PopupComponent = Vue.extend(component)
      this.$nextTick(function () {
        new PopupComponent().$mount(this.$refs.ktPopupSlot)
      })
    }
  }
}
