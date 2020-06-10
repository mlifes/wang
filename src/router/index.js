import Vue from 'vue'
import VueRouter from 'vue-router'
import Tabs from '../views/tabs.vue'

Vue.use(VueRouter)
/* eslint-disable */
const routes = [{
  path: '/',
  name: 'Tabs',
  component: Tabs
}, {
  path: '/home',
  name: 'home',
  component: () => import('../views/home/home.vue')
}, {
  path: '/work',
  name: 'work',
  component: () => import('../views/work/work.vue')
}, {
  path: '/unvi',
  name: 'unvi',
  component: () => import('../views/unvi/unvi.vue')
}, {
  path: '/person',
  name: 'person',
  component: () => import('../views/person/person.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
