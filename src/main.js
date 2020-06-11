import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components/index'
import directives from './directives/index'

Vue.config.productionTip = false

// 遍历赋值全局组件
for (const key in components) {
  Vue.component(key, components[key])
}

// 遍历指令
for (const key in directives) {
  Vue.directive(key, directives[key])
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
