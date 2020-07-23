/**
  * @author wang.kt
  * @date 2020-06-08 20:48:23
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * 2020-06-08 20:48:23 wang.kt      初始化文档
  * ----------------------------------------------------
  * */
export default {
  name: 'home',
  components: {
    'p-summarys': () => import('./summarys/summarys.vue'),
    'p-introduction': () => import('./introduction/introduction.vue')
  },
  data () {
    return {
      homeScrollOpts: {
        canRefresh: true,
        canLoadMore: true
      },
      tabsOpts: {
        ratio: 0.5,
        color: '#009688',
        isTop: false
      },
      // 此对象可以通过配置动态加载，用户登陆初始化后可以从vuex配置
      list: [
        { name: '简介', component: 'p-summarys', isLoad: true, list: [] },
        {
          name: '容器',
          component: 'p-introduction',
          isLoad: false,
          list: [
            {
              title: 'kt-app组件',
              subtitle: '单页面应用的根容器组件，必须。',
              content: `<p>此容器被设计为整个页面的根容器，并且需要保证其唯一性。即<code>&lt;kt-app&gt;&lt;/kt-app&gt;</code>标签在整个DOM中只能存在一个。同时该标签被设计为<code>position:absolute</code>以支持转场动画。</p>
              <p>例如：当前页面匹配的子路由页面或引入的组件，则其子页面或组件不能使用<code>&lt;kt-app&gt;&lt;/kt-app&gt;</code>标签。</p>
              <div class="code">
                //当你需要使用的时候，你只需要放到最外层如下所示:<br>
                &lt;kt-app&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;//TODO: 此处添加header、content、footer容器标签，不可以添加其它标签<br>
                &lt;/kt-app&gt;<br>
              </div>`
            },
            {
              title: 'kt-header组件',
              subtitle: '单页面应用的header容器组件,可选。',
              content: `<p>此组件与content、footer被应用与同一流布局中，默认占用高度为48px。因此，其常常与content容器同级使用且可以嵌套！</p>
              <div class="code">
              //1、你可以在kt-app容器下使用<br>
              &lt;kt-app&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;kt-header&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//TODO: 做你喜欢的！ <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/kt-header&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;kt-content&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//TODO: 做你喜欢的！ <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/kt-content&gt;<br>
              &lt;/kt-app&gt;<br>
              //2、你可以在kt-content容器下使用 <br>
              &lt;kt-content&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;kt-header&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//TODO: 做你喜欢的！ <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/kt-header&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;kt-content&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//TODO: 做你喜欢的！ <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/kt-content&gt;<br>
              &lt;/kt-content&gt;<br>
              </div>
            `
            },
            {
              title: 'kt-content组件',
              subtitle: '单页面应用的content容器组件，必选。',
              content: `<p>此组件通常与header、footer组件一起使用，也可单独使用。其被设计为流布局并自适应父容器高度。当存在header、footer时，会添加相应的has-header、has-footer类！</p>
              <p>同时，其被设计为默认使用<code>&lt;kt-scroll&gt;&lt;/kt-scroll&gt;</code>组件，以提供是否支持滚动、是否支持上拉加载、下拉刷新等功能！</p>
              <p>具体content容器支持的滚动配置，请参考kt-scroll组件！</p>
              <div class="code">
              //请合理使用嵌套···<br>
              &lt;kt-app&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;kt-content :scroll='isScroll' :opts='myOpts' &gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//TODO: 做你喜欢的！ <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/kt-content&gt;<br>
              &lt;/kt-app&gt;<br>
              </div>
            `
            },
            {
              title: 'kt-footer组件',
              subtitle: '单页面应用的footer容器组件，可选。',
              content: `<p>此组件通常与header、content组件一起使用，不可以单独使用。其被设计为流布局并默认高度<code>64px</code>,允许被嵌套在app、content容器组件中。</p>
              <div class="code">
              //请合理使用嵌套···<br>
              &lt;kt-app&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;kt-content&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//TODO: 做你喜欢的！ <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/kt-content&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;kt-footer&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//TODO: 做你喜欢的！ <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/kt-footer&gt;<br>
              &lt;/kt-app&gt;<br>
            </div>
            `
            },
            {
              title: 'kt-scroll组件', subtitle: '单页面应用的滚动容器组件，可选。', content: `
            <p>该容器被设计为支持沿x或y轴滚动、支持下拉加载、支持上拉刷新等功能。其中<code>&lt;kt-content&gt;&lt;/kt-content&gt;</code>默认使用了该容器组件！</p>
            <p>该容器被设计自动支持<code>&lt;kt-scroll-top&gt;&lt;/kt-scroll-top&gt;</code>返回置顶组件，并默认为true</p>
            <div class="code">
              //请合理使用嵌套···<br>
              &lt;kt-scroll scroll='y' :opts='myOpts' &gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;//TODO: 做你喜欢的！ <br>
              &lt;/kt-scroll&gt;<br>
              <hr>
              //scroll:  设置滚动方向，传入x、y时沿对应坐标轴滚动，传入''或其它值时禁止滚动<br>
              //opts: {<br>
              //        canRefresh: false,  是否可以下拉刷新，默认false<br>
              //        canLoadMore: false, 是否可以上拉加载，默认false<br>
              //        showBackTop: true  是否显示返回置顶按钮，默认true<br>
              //      }<br>
            </div>
            `
            }
          ]
        },
        {
          name: '滑动',
          component: 'p-introduction',
          isLoad: false,
          list: [
            { title: '标签栏组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
            { title: '标签组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
            { title: '滑动栏组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
            { title: '滑动组件', subtitle: '您来到了知识的荒原！', content: 'just a test' }
          ]
        },
        {
          name: '弹窗',
          component: 'p-introduction',
          isLoad: false,
          list: [
            {
              title: 'kt-alert组件(单击测试)',
              type: 'alert',
              subtitle: '全局alert组件',
              content: `<p>该组件被设计为全局的alert弹窗。整个弹窗模块被设计成plugin，插入到脱离<code>&lt;div id='app' &gt;</code>的在
              body标签下的<code>&lt;kt-popup-solt&gt;&lt;/kt-popup-solt&gt;</code>标签内。因此，其具有独立的层叠上下文和隔离事件冒泡的特性。</p>
              <p>同时，由于其独立和唯一性也导致了，其弹出的唯一性！因此，在应用中应合理设计弹窗逻辑。</p>
              <div class='code'>
              // 在使用的过程中，用户可以直接调用全局的方法<br>
              this.$ktAlert.show({<br>
                title: '今日头条',<br>
                msg: 'Wang是基于Vue的开源的WebApp框架，作者在不断更新中····',<br>
                // template: \`&lt;p&gt;Wang是基于Vue的开源的webApp框架，作者在不断更新中····&lt;/p&gt;<br>
                // &lt;p&gt;敬请期待！&lt;/p&gt;\`,<br>
                optsClass: 'my-alert-class',<br>
                btnText: '去吧，比卡丘!'<br>
              })<br>
              </div>
              `
            },
            {
              title: 'kt-confirm组件(单击测试)',
              type: 'confirm',
              subtitle: '全局confirm组件。',
              content: `<p>该组件被设计为全局的confirm弹窗。整个弹窗模块被设计成plugin，插入到脱离<code>&lt;div id='app' &gt;</code>的在
              body标签下的<code>&lt;kt-popup-solt&gt;&lt;/kt-popup-solt&gt;</code>标签内。因此，其具有独立的层叠上下文和隔离事件冒泡的特性。</p>
              <p>其区别于alert，是由于被设计支持component组件输入，而非仅支持template输入</p>
              <p>同时，由于其独立和唯一性也导致了，其弹出的唯一性！因此，在应用中应合理设计弹窗逻辑。</p>
              <div class='code'>
              // 在使用的过程中，用户可以直接调用全局的方法<br>
              this.$ktConfirm.show({<br>
                title: '今日头条',<br>
                // msg: 'Wang是基于Vue的开源的WebApp框架，作者在不断更新中····',<br>
                // template: \`&lt;p&gt;Wang是基于Vue的开源的webApp框架，作者在不断更新中····&lt;/p&gt;<br>
                // &lt;p&gt;敬请期待！&lt;/p&gt;\`,<br>
                optsClass: 'my-confirm-class',<br>
                btnText: '去吧，比卡丘!'<br>
              })<br>
              </div>
              `
            },
            {
              title: 'kt-popup组件(单击测试)',
              type: 'popup',
              subtitle: '全局popup组件',
              content: `<p>该组件被设计为全局的popup容器。整个弹窗模块被设计成plugin，插入到脱离<code>&lt;div id='app' &gt;</code>的在
              body标签下的<code>&lt;kt-popup-solt&gt;&lt;/kt-popup-solt&gt;</code>标签内。因此，其具有独立的层叠上下文和隔离事件冒泡的特性。</p>
              <p>用户需要传入component以便渲染成页面</p>
              <div class='code'>
              // 在使用的过程中，用户可以直接调用全局的方法<br>
              this.$ktPopup.show({<br>
                component: component, // 组件<br>
                opts:{                // 配置项<br>
                  height: 0.5         // 高度占比，默认0.5<br>
                  dismiss: true       // 点击背景隐藏，默认true
                  class: ''           // 样式，默认''
                }
              })<br>
              </div>
              `
            },
            {
              title: 'kt-scroll-top组件',
              subtitle: '全局返回置顶组件',
              content: `<p>该组件被设计为全局的返回置顶组件。整个弹窗模块被设计成plugin，插入到脱离<code>&lt;div id='app' &gt;</code>的在
              body标签下的<code>&lt;kt-popup-solt&gt;&lt;/kt-popup-solt&gt;</code>标签内。因此，其具有独立的层叠上下文和隔离事件冒泡的特性。</p>
              <p>其默认3s后隐藏该置顶按钮。同时由于其特性，用户需要在切换页面、或者滑动sliders时，需要通知滚动组件隐藏。</p>
              <p>该置顶组件，已被内嵌到kt-scroll组件中。</p>
              <p>其中kt-sliders中已调用通知滚动组件隐藏接口。</p>
              <div class='code'>
              // kt-scroll-top组件的使用，绑定到move事件，其每一次滑动周期都将被重置<br>
              this.$ktScrollTop.bindTouchmove($parent, $opts, event)<br>
              this.$ktScrollTop.bindTouchend($parent, $opts, event)<br>
              // kt-scroll-top组件，通知其隐藏.<br>
              this.$EventBusDispatcer.dispatchs.scrollHide()<br>
              // or <br>
              this.$ktScrollTop.unbind()<br>
              </div>
              `
            }
          ]
        },
        {
          name: '基础',
          component: 'p-introduction',
          isLoad: false,
          list: [
            { title: '按钮组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
            { title: '图片组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
            { title: '图标组件', subtitle: '您来到了知识的荒原！', content: 'just a test' }
          ]
        },
        {
          name: '动画',
          component: 'p-introduction',
          isLoad: false,
          list: [
            { title: '滑动动画', subtitle: '您来到了知识的荒原！', content: 'just a test' },
            { title: '弹出动画', subtitle: '您来到了知识的荒原！', content: 'just a test' }
          ]
        }
      ]
    }
  },
  methods: {
    onSlidingTransformAnim: function (data) {
      this.$refs.ktTabs.bindTransformAnim(data)
    },
    onTabClick: function (index) {
      this.$refs.ktSlides.slideTo(index, 0)
    },
    onTabsChange: function (index) {
      if (!this.list[index].isLoad) {
        this.list[index].isLoad = true
      }
    },
    onResult: function (type) {
      switch (type) {
        case 'alert':
          this.$ktAlert.show({
            title: '今日头条',
            msg: 'Wang是基于Vue的开源的WebApp框架，敬请使用！',
            // template: `<p>Wang是基于Vue的开源的webApp框架，作者在不断更新中····</p>
            // <p>敬请期待！</p>`,
            optsClass: 'my-alert-class',
            btnText: '去吧，比卡丘!'
          })
          break
        case 'confirm':
          this.$ktConfirm.show({
            title: '今日新闻',
            msg: 'Wang是基于Vue的开源的WebApp框架，敬请使用！',
            optsClass: 'my-confirm-class',
            cancelText: '取消',
            submitText: '确认'
          })
          break
        case 'popup':
          this.$ktPopup.show({
            component: {
              data () {
                return {
                  data: new Date()
                }
              },
              template: '<div class="popup-test"> JUST A TEST  {{data}}</div>'
            }
          })
          break
        default:
          break
      }
    }
  }
}
