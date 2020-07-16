// 动画的速度曲线-模仿css

export function animLinear (el, dis, delay, cbFn, frequency) {
  let num = 0
  const f = frequency || 10
  const d = delay * 1000 / f
  const step = Math.round(dis * 1000 / d) / 1000
  let cdis = 0

  function ffn () {
    num++
    if (num > d) {
      // 清除
    } else {
      cdis = num === d ? dis : num * step
      cbFn && cbFn(cdis)
    }
  }
  if (el.animTimer) {
    clearInterval(el.animTimer)
  }
  el.animTimer = setInterval(function () {
    ffn && ffn()
  }, f)
}
