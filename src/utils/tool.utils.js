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

export function simpleFormatDate (date, fmt) {
  fmt || (fmt = 'yyyy-MM-dd hh:mm:ss')
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
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

export const dynamicLoading = {
  css: function (path, alwaysRefresh) {
    if (!path || path.length === 0) {
      throw new Error('argument "path" is required !')
    }
    var head = document.getElementsByTagName('head')[0]
    var link = document.createElement('link')
    if (alwaysRefresh) {
      path = path + '?' + Math.random()
    }
    link.href = path
    link.rel = 'stylesheet'
    link.type = 'text/css'
    head.appendChild(link)
  },
  js: function (path, alwaysRefresh, id, onload) {
    if (!path || path.length === 0) {
      throw new Error('argument "path" is required !')
    }
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')

    if (id) {
      script.setAttribute('id', id)
    }

    if (alwaysRefresh) {
      path = path + '?' + Math.random()
    }
    script.src = path
    script.type = 'text/javascript'
    head.appendChild(script)
    if (onload) {
      script.onload = onload
    }
  }
}
