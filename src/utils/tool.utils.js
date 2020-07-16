// 定义page方法
export function PageList () {
  this.index = 0
  this.size = 10
  this.canLoadMore = true

  this.refresh = null
  this.loadMore = null

  this.buildParams = function (params) {
    if (!params) {
      params = {}
    }
    params.pageIndex = this.index
    params.pageSize = this.size
    return params
  }

  this.onRefresh = function (params) {
    this.index = 0
    this.canLoadMore = true
    this.refresh && this.refresh(this.buildParams(params))
  }
  this.onLoadMore = function (params) {
    if (this.canLoadMore) {
      this.index++
      this.loadMore && this.loadMore(this.buildParams(params))
    }
  }
}

export function mergeOpts (opts, defaultOpts) {
  if (!opts)opts = {}
  for (const key in defaultOpts) {
    // eslint-disable-next-line
    if (!opts.hasOwnProperty(key)) {
      opts[key] = defaultOpts[key]
    }
  }
}

// 节流
export function throttle (fn, delay) {
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

// 防抖工具方法
export function debounce (fn, wait) {
  var timeout = null
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(fn, wait)
  }
}

export function uuid (len, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  var uuid = []
  var i
  radix = radix || chars.length
  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
  } else {
    var r
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'
    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16
        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}
