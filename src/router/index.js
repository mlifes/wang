import Vue from 'vue'
import VueRouter from 'vue-router'
import Tabs from '../views/tabs.vue'

Vue.use(VueRouter)
/* eslint-disable */
const routes = [{
  path: '/',
  name: 'Tabs',
  component: Tabs
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
