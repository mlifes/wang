// 重定义log事件
import { simpleFormatDate } from '../utils/tool.utils'

const logs = {}

const isPro = process.env.NODE_ENV === 'production'

const type = ['debug', 'info', 'warn', 'log', 'error']

type.forEach((v, i, a) => {
  logs[v] = function () {
    if (isPro) {
      // TODO: 此处需要过滤敏感数据

    }
    console[v]('当前时间：', simpleFormatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'))
    console[v].apply({}, [...arguments])
  }
})

export default logs
