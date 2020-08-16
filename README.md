# wang

---
基于VUE的移动端WebApp框架

### npm run vue-g 使用该命令快速创建需要的组件工具，可以在generate.js中修改

1、创建views页面: v@pathname 根路径为src/views
例： v@home/home  创建home文件夹下名字为home的页面组件

2、创建component组件：c@pathname 根路径为src
例： c@components/layout/kt-app  创建components/layout路径下的kt-app文件

3、创建directive组件：d@pathname 根路径为directives
例： d@touch/kt-touch-back  创建directives/touch路径下的kt-touch-back文件

4、创建plugin组件：p@pathname 根路径为plugins
例： p@wangui/wang-ui  创建plugins/wangui路径下的plugins文件

5、创建filter组件:f@pathname 根路径为filters
例： f@xss  创建filters路径下的xss文件

### 其它：
  关于service：service是挂载到Vue原型上的服务，其本质是单例的。应主要关注于项目中特定的业务逻辑及调用原生兼容性接口的封装，例如：调用拍照功能、调用支付功能、调用相册功能，以此针对android、ios、wechat等容器兼容。

  关于vuex:vuex应主要关注全局或者多组件之间的数据交互更新问题，而非业务及功能逻辑。

  关于platform：platform应主要关注不同容器端的兼容问题。