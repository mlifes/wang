/**
 * @author wang.kt
 * @date 2020-07-22 13:15:34
 * @version 1.0
 * @description xss过滤器 , args可忽略 TODO just a test
 * 局部请使用,请直接定义，调用参考： {{ data | xss(args) }}
 * ----------------------------------------------------
 * date          author         desc
 * 2020-07-22 13:15:34 wang.kt      初始化文档
 * ----------------------------------------------------
 * */
import '../utils/xss.utils'

export default function (html, args) {
  // 定义配置项
  var options = {
    // 自定义匹配到标签的属性时的处理方法
    onTagAttr: function (tag, name, value, isWhiteAttr) {
      if (isWhiteAttr) {
        // 当该属性在白名单时，直接返回该数据。暂不做处理。
        return name + '="' + value + '"'
      }
    }
  }
  // eslint-disable-next-line no-undef
  return filterXSS(html, options)
}
