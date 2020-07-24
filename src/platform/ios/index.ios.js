// 禁用ios的橡皮筋效果
export function rubberCompatible () {
  // 去除 iOS 顶部橡皮筋效果
  let startY, endY
  document.body.addEventListener('touchstart', function (e) {
    startY = e.touches[0].pageY
  })
  document.body.addEventListener('touchmove', function (e) {
    endY = e.touches[0].pageY
    console.log('endY:' + endY)
    // 手指下滑，页面到达顶端不能继续下滑
    if (endY > startY && document.body.scrollTop < 0) {
      e.preventDefault()
    }
  }, { passive: false })
}
