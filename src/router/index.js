import Vue from 'vue'
import VueRouter from 'vue-router'
import Tabs from '../views/tabs.vue'

// 添加返回方法，以支持对返回页面的支持
VueRouter.prototype.goBack = function () {
  this.isBack = true
  this.back()
}

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Tabs',
  component: Tabs
}, {
  path: '/article',
  name: 'article',
  component: () => import('../views/home/article/article.vue')
}]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
