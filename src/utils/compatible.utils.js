const browser = {
  version: (function () {
    const u = navigator.userAgent
    return {
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, // 是否iPad
      webApp: u.indexOf('Safari') === -1 // 是否web应该程序，没有头部与底部
    }
  }()),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
// 禁用ios的橡皮筋效果
function rubberCompatible () {
  console.log('rubberCompatible')
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

export default {
  browser,
  compatible: function () {
    if (browser.version.ios || browser.version.iPhone || browser.version.iPad) {
      rubberCompatible()
    }
  }
}
