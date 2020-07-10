/**
 * @description 监听滚动的工具方法
 * @author wang.kt
 * @date 2020-06-17 11:00:00
 * @version 1.0
 */
import uuid from './uuid.utils'

//  定义钩子
var hooks = {}

// 定义钩子宿主
var attachs = {}

// /**
//  * 防抖
//  * 延迟触发
//  *
//  * */
// function debounce (fn, wait) {
//   var timeout = null
//   return function () {
//     if (timeout !== null) {
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(fn, wait)
//   }
// }

/**
 * 节流
 * 时间段内执行1次
 * */
var throttle = function (fn, delay) {
  var prev = Date.now()
  return function () {
    var now = Date.now()
    if (now - prev >= delay) {
      var context = this
      var args = arguments
      fn.apply(context, args)
      prev = Date.now()
    }
  }
}

const windowScorllHandle = function (args) {
  for (const key in hooks) {
    hooks[key]()
  }
}

export default {
  attach: function (vm) {
    if (!attachs[vm]) {
      vm.addEventListener('scroll', throttle(windowScorllHandle, 100))
      attachs[vm] = true
    }
  },
  bind: function (vm, fn) {
    if (fn) {
      vm.scorllId = uuid.uuid(8, 2)
      hooks[vm.scorllId] = fn
    }
  },
  unbind: function (vm) {
    if (hooks[vm.scorllId]) {
      delete hooks[vm.scorllId]
    }
  }
}
