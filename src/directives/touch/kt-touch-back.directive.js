/**
 * @author wang.kt
 * @date 2020-06-10 18:04:43
 * @version 1.0
 * @description kt-touch-back指令 请输入该指令的功能描述
 * 全局请使用Vue.directive('',xx),局部请使用directive
 * ----------------------------------------------------
 * date          author         desc
 * 2020-06-10 18:04:43 wang.kt      初始化文档
 * ----------------------------------------------------
 * */
// var touchstart, touchmove, touchend
export default {
  bind: function (el, binding, vnode) {

    // var touch = {
    //   x: 0,
    //   y: 0
    // }
    // // var that = this
    // touchstart = function (event) {
    //   // const startX = event.touches[0].screenX
    // }
    // touchmove = function (event) {
    //   touch.x = event.touches[0].screenX
    //   touch.y = event.touches[0].screenY
    // }
    // touchend = function (event) {
    //   console.log(el.clientWidth)
    //   el.__vue__.$router.go(-1)
    //   // if (touch.x > el.clientWidth) {
    //   //   // 执行返回方法
    //   //   console.log(1)
    //   //   el.__vue__.$router.go(-1)
    //   setTimeout(function () {
    //     // console.log(2)
    //     console.log(el.__vue__.$route.name)
    //     // el.__vue__.$router.forward()
    //   }, 1000)
    //   // }
    // }
    // el.addEventListener('touchstart', touchstart)
    // el.addEventListener('touchmove', touchmove)
    // el.addEventListener('touchend', touchend)
  },
  unbind: function (el, binding, vnode) {
    // el.removeEventListener('touchstart', touchstart)
    // el.removeEventListener('touchmove', touchmove)
    // el.removeEventListener('touchend', touchend)
  }
}
