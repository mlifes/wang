import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components/index'

Vue.config.productionTip = false

// 遍历赋值全局组件
for (const key in components) {
  Vue.component(key, components[key])
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
