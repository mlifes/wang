# wang

---
基于VUE的移动端WebApp框架

### npm run vue-g 使用该命令快速创建需要的组件工具，可以在generate.js中修改

+ 创建views页面: v@pathname 根路径为src/views
例： v@home/home  创建home文件夹下名字为home的页面组件
+ 创建component组件：c@pathname 根路径为src
例： c@components/layout/kt-app  创建components/layout路径下的kt-app文件
+ 创建directive组件：d@pathname 根路径为directives
例： d@touch/kt-touch-back  创建directives/touch路径下的kt-touch-back文件
+ 创建plugin组件：p@pathname 根路径为plugins
例： p@wangui/wang-ui  创建plugins/wangui路径下的plugins文件
+ 创建filter组件:f@pathname 根路径为filters
例： f@xss  创建filters路径下的xss文件

### 其它：
+ service：service是挂载到Vue原型上的服务，其本质是单例的。应主要关注于项目中特定的业务逻辑及调用原生兼容性接口的封装，例如：调用拍照功能、调用支付功能、调用相册功能，以此针对android、ios、wechat等容器兼容。
+ vuex:vuex应主要关注全局或者多组件之间的数据交互更新问题，而非业务及功能逻辑。
+ platform：platform应主要关注不同容器端的兼容问题。

### 关于多主题设置

+ theme-color :主色调

  >被定义于使用在凸显主题颜色之处，包括但不限于：active、submit btn、icon等。

+ theme-clear-color :主背景色调

  >被定义于使用在主题背景之上，其因相对于主色调使用该背景。

+ theme-bg :背景颜色
  >被定义于content或者内容显示的背景颜色，其因与主题颜色显出色差。

+ theme-bg-secondary :次级背景颜色
  >被定义于底色，其区别于内容区域，显示出色差

+ font-color :默认字体颜色 
  >字体颜色

+ font-light-color :浅色字体颜色
  >浅字体颜色，备注、说明等段落文字颜色

+ mask :遮罩层
  >遮罩层颜色

---
```
# @include theme-data($props,$key) : 添加对应主题的指定css属性及对应的主题值

# @include theme-nomal : 通用主题，定义字体和背景颜色

# @include theme-light : 通用浅色主题，定义字体和背景颜色

# @include theme-color : 主题颜色，定义主题颜色

# @include theme-clear : 主题背景

# @include theme-bg : 主题内容背景

# @include theme-bg-secondary : 主题次级背景

# @include theme-mask ：主题遮罩层

# @include font-color : 字体颜色

# @include font-light-color : 浅色字体颜色

```