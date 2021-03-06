import { simpleFormatDate } from '../src/utils/tool.utils'

var now = function () {
  return simpleFormatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
}

const author = 'wang.kt'

module.exports = {
  template: name => {
    return `<!--
    @author ${author}
    @date ${now()}
    @version 1.0
    @description ____ 功能入口文件
-->
<template src="./${name + '.vue.html'}" lang="html"></template>
<script src="./${name + '.vue.js'}" lang="js"></script>
<style src="./${name + '.vue.scss'}" scoped lang="scss"></style>
`
  },
  html: name => {
    return `<!--
    @author ${author}
    @date ${now()}
    @version 1.0
    @description 功能描述
    ----------------------------------------------------
    date          author      desc
    ${now()}      ${author}   初始化文档
    ----------------------------------------------------
-->
<div class="${name}">
    <!-- TODO: ${name} -->
</div>`
  },
  scss: name => {
    return `@charset "UTF-8";
/**
  * @author ${author}
  * @date ${now()}
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * ${now()}      ${author}      初始化文档
  * ----------------------------------------------------
  * */
.${name} {}`
  },
  js: name => {
    return `/**
  * @author ${author}
  * @date ${now()}
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * ${now()} ${author}      初始化文档
  * ----------------------------------------------------
  * */
export default {
  name: '${name}'
}
`
  },
  // 组件生成模版
  component: name => {
    return `<!--
  @author ${author}
  @date ${now()}
  @version 1.0
  @description 组件功能描述
  全局请使用Vue.component({'name':()=>import('yourpath')}) 异步加载
  局部请直接在componet中通过{'name':()=>import('yourpath')} 异步加载
  ----------------------------------------------------
  date          author         desc
  ${now()} ${author}     初始化文档
  ----------------------------------------------------
  -->
<template src="./${name + '.component.vue.html'}" lang="html"></template>
<script src="./${name + '.component.vue.js'}" lang="js"></script>
<style src="./${name + '.component.vue.scss'}" lang="scss"></style>
`
  },
  directive: name => {
    return `/**
 * @author ${author}
 * @date ${now()}
 * @version 1.0
 * @description ${name}指令 请输入该指令的功能描述
 * 全局请使用Vue.directive('',xx),局部请使用directive
 * ----------------------------------------------------
 * date          author         desc
 * ${now()} ${author}      初始化文档
 * ----------------------------------------------------
 * */
export default {
  bind: function (el, binding, vnode) {

  },
  inserted: function (el, binding, vnode) {

  },
  update: function (el, binding, vnode, oldVnode) {

  },
  componentUpdated: function (el, binding, vnode, oldVnode) {

  },
  unbind: function (el, binding, vnode) {

  }
}
`
  },
  plugin_index: name => {
    return `/**
  * @author ${author}
  * @date ${now()}
  * @version 1.0
  * @description ${name}插件
  * ----------------------------------------------------
  * date          author         desc
  * ${now()} ${author}      初始化文档
  * ----------------------------------------------------
  * */
import { install } from './${name}.plugin.install'

export default class ${name} {

}
`
  },
  plugin_install: name => {
    return `/**
  * @author ${author}
  * @date ${now()}
  * @version 1.0
  * @description ${name}插件
  * ----------------------------------------------------
  * date          author         desc
  * ${now()} ${author}      初始化文档
  * ----------------------------------------------------
  * */
export function install(Vue, options) {

}
`
  },
  filter: name => {
    return `/**
 * @author ${author}
 * @date ${now()}
 * @version 1.0
 * @description ${name}过滤器 , args可忽略 TODO 
 * 局部请使用,请直接定义，调用参考： {{ data | ${name}(args) }}
 * ----------------------------------------------------
 * date          author         desc
 * ${now()} ${author}      初始化文档
 * ----------------------------------------------------
 * */
import Vue from 'vue'

Vue.filter('${name}', function (value, args) {
  return ''
})
`
  }
}
