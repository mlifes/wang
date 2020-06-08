const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.green(`${message}`))
const successLog = message => console.log(chalk.blue(`${message}`))
const errorLog = error => console.log(chalk.red(`${error}`))
const vueTemplate = require('./template')
// const _ = process.argv.splice(2)[0] === '-com'

const generateFile = (path, data) => {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`)
    return
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}

// 公共组件目录src/base,全局注册组件目录src/base/global,页面组件目录src/components
log('请输入要生成的类型及文件名,例如:views@pathname 表示生成页面,其它诸如:component@pathname ,directive@pathname,filter@pathname')
// _ ? log('请输入要生成的组件名称、如需生成全局组件，请加 global/ 前缀') : log('请输入要生成的页面组件名称、会生成在 components/目录下')
let name = ''
process.stdin.on('data', async chunk => {
  const commands = String(chunk).trim().toString()
  const args = commands.split('@')
  // 获取类型，是view，component,还是其它
  let type = args[0]
  // 文件名称
  const pathname = args[1]
  // 需要生成的文件组
  let products = []

  let prePath = ''

  if (pathname.includes('/')) {
    const inputArr = pathname.split('/')
    name = inputArr[inputArr.length - 1]
    prePath = pathname.split('/' + name)[0]
  } else {
    name = pathname
  }

  if (type === 'views' || type === 'v') {
    // 表示生成视图
    prePath = 'views/' + prePath
    products = [{
      suffix: '.vue',
      product: vueTemplate.template
    }, {
      suffix: '.vue.html',
      product: vueTemplate.html
    }, {
      suffix: '.vue.js',
      product: vueTemplate.js
    }, {
      suffix: '.vue.scss',
      product: vueTemplate.scss
    }]
  } else if (type === 'component' || type === 'c') {
    products = [{
      suffix: '.component.vue',
      product: vueTemplate.component
    }, {
      suffix: '.component.vue.html',
      product: vueTemplate.html
    }, {
      suffix: '.component.vue.js',
      product: vueTemplate.js
    }, {
      suffix: '.component.vue.scss',
      product: vueTemplate.scss
    }]
  } else if (type === 'directive' || type === 'd') {
    prePath = 'directives/' + prePath
    products = [{
      suffix: '.directive.js',
      product: vueTemplate.directive
    }]
  } else if (type === 'filter' || type === 'f') {
    prePath = 'filters/' + prePath
    products = [{
      suffix: '.filter.js',
      product: vueTemplate.filter
    }]
  } else {
    errorLog(`${type} 类型输入错误，请重新输入,当前仅支持 views(v)、component(c)、directive(d)、filter(f)`)
    return
  }

  // 组件目录路径
  const fileDir = resolve('../src', prePath)

  const hasFileDir = fs.existsSync(fileDir)

  if (!hasFileDir) {
    log(`正在生成文件 ${fileDir}`)
    await dotExistDirectoryCreate(fileDir)
  }

  try {
    // 遍历需要创建的文件
    for (let i = 0, len = products.length; i < len; i++) {
      const filePath = resolve(fileDir, name + products[i].suffix)
      log(`正在生成 ${type} 文件 ${filePath}`)
      await generateFile(filePath, products[i].product(name))
      if (i === len - 1) {
        successLog('生成成功')
      }
    }
  } catch (e) {
    errorLog(e.message)
  }
  process.stdin.emit('end')
})

process.stdin.on('end', () => {
  log('exit')
  process.exit()
})

var dotExistDirectoryCreate = function (directory) {
  return new Promise((resolve) => {
    mkdirs(directory, function () {
      resolve(true)
    })
  })
}

// 递归创建目录
var mkdirs = function (directory, callback) {
  var exists = fs.existsSync(directory)
  if (exists) {
    callback()
  } else {
    mkdirs(path.dirname(directory), function () {
      fs.mkdirSync(directory)
      callback()
    })
  }
}
