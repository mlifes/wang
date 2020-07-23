const CompressionPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  // 设置基本地址
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  // 设置输出目录
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。默认是空
  assetsDir: '',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
  // 然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，
  // 你可以通过将这个选项设为 false 来关闭文件名哈希。
  filenameHashing: true,
  // 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件
  //   pages: {
  //     index: {
  //       // page 的入口
  //       entry: 'src/index/main.js',
  //       // 模板来源
  //       template: 'public/index.html',
  //       // 在 dist/index.html 的输出
  //       filename: 'index.html',
  //       // 当使用 title 选项时，
  //       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //       title: 'Index Page',
  //       // 在这个页面中包含的块，默认情况下会包含
  //       // 提取出来的通用 chunk 和 vendor chunk。
  //       chunks: ['chunk-vendors', 'chunk-common', 'index']
  //     },
  //     // 当使用只有入口的字符串格式时，
  //     // 模板会被推导为 `public/subpage.html`
  //     // 并且如果找不到的话，就回退到 `public/index.html`。
  //     // 输出文件名会被推导为 `subpage.html`。
  //     subpage: 'src/subpage/main.js'
  //   }
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右
  runtimeCompiler: true,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  transpileDependencies: [],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  // source map 是指在压缩转换之后的代码和源码之间的位置关系，debug时就可以直接查看源码了。
  productionSourceMap: process.env.NODE_ENV !== 'production',
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
  // 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
  // crossorigin: undefined,

  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
  // integrity: false,

  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  // 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false
        }), new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          generateStatsFile: true,
          statsOptions: { source: false }
        })]
      }
    }
  },
  // css 配置
  css: {
    // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    requireModuleExtension: true,
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
    extract: process.env.NODE_ENV === 'production',
    // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
    sourceMap: false,
    // 向 CSS 相关的 loader 传递选项。
    loaderOptions: {
      //   css: {
      //     // 这里的选项会传递给 css-loader
      //   },
      //   postcss: {
      //     // 这里的选项会传递给 postcss-loader
      //   },
      //   sass: {},
      //   less: {},
      //   stylus: {},
      //   scss: {}
    }
  },
  devServer: {
    // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。
    // proxy: 'http://localhost:8080'
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   '/foo': {
    //     target: '<other_url>'
    //   }
    // }
  }
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  // parallel: require('os').cpus().length > 1,
  // 向 PWA 插件传递选项。
  // pwa:
  // 这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项。
  //   pluginOptions: {

  //   }
}
