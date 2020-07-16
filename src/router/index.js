import Vue from 'vue'
import VueRouter from 'vue-router'
import tabs from '../views/tabs.vue'

// 添加返回方法，以支持对返回页面的支持
VueRouter.prototype.goBack = function () {
  this.isBack = true
  this.back()
}

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: tabs,
  children: [{
    path: '',
    name: 'home',
    component: () => import('../views/home/home.vue')
  }, {
    path: 'work',
    name: 'work',
    component: () => import('../views/work/work.vue')
  }, {
    path: 'unvi',
    name: 'unvi',
    component: () => import('../views/unvi/unvi.vue')
  }, {
    path: 'person',
    name: 'person',
    component: () => import('../views/person/person.vue')
  }]
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
