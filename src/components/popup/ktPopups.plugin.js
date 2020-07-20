/**
  * @author wang.kt
  * @date 2020-07-19 18:41:49
  * @version 1.0
  * @description ktPopups插件
  * ----------------------------------------------------
  * date          author         desc
  * 2020-07-19 18:41:49 wang.kt      初始化文档
  * ----------------------------------------------------
  * */

import scrollTopComponent from './scrollTop/kt-scroll-top.component.vue'

const KtPopupsPlugins = {
  install: function (Vue, options) {
    const popupSlot = document.createElement('div')
    popupSlot.setAttribute('id', 'app-popup-slot')
    document.body.appendChild(popupSlot)

    // 初始化install
    const MyST = Vue.extend(scrollTopComponent)
    const mySTInstance = new MyST().$mount()
    popupSlot.appendChild(mySTInstance.$el)

    Vue.prototype.$ktScrollTop = mySTInstance
  }
}

export default KtPopupsPlugins
