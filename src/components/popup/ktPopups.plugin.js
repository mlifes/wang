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

import alertComponent from './alert/kt-alert.component.vue'
import popupComponent from './popup/kt-popup.component.vue'

function KtPopupsItem (component, vueMethodName) {
  this.component = component
  this.vueMethodName = vueMethodName
}

const KtPopupsPlugins = {
  install: function (Vue, options) {
    const popupSlot = document.createElement('div')
    popupSlot.setAttribute('id', 'app-popup-slot')
    document.body.appendChild(popupSlot)

    function buildPluginsComponent (ktPopupsItem) {
      const MyComponent = Vue.extend(ktPopupsItem.component)
      const myInstance = new MyComponent().$mount()
      popupSlot.appendChild(myInstance.$el)
      Vue.prototype[ktPopupsItem.vueMethodName] = myInstance
    }

    const cargs = []
    cargs.push(new KtPopupsItem(scrollTopComponent, '$ktScrollTop'))
    cargs.push(new KtPopupsItem(popupComponent, '$ktPopup'))
    cargs.push(new KtPopupsItem(alertComponent, '$ktAlert'))

    cargs.map((cur, idx, arg) => {
      buildPluginsComponent(cur)
    })
  }
}

export default KtPopupsPlugins
