import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './service/index'

import components from './components/index'
import directives from './directives/index'
import filters from './filters/index'
// 插件
import ktPopupsPlugins from './components/popup/ktPopups.plugin'

import { attach } from './platform/index'

attach()

Vue.config.productionTip = false

// 遍历赋值全局组件
for (const key in components) {
  Vue.component(key, components[key])
}

// 遍历指令
for (const key in directives) {
  Vue.directive(key, directives[key])
}

// 遍历过滤器
for (const key in filters) {
  Vue.filter(key, filters[key])
}

// 使用插件
Vue.use(ktPopupsPlugins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
