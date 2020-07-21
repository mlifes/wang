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
              subtitle: '单页面应用的根容器组件，必须',
              content: `<p>此容器被设计为整个页面的根容器，并且需要保证其唯一性。<code>&lt;kt-app&gt;&lt;/kt-app&gt;</code>标签在整个DOM中只能
              存在一个。同时该标签被设计为<code>position:absolute</code>以支持转场动画。</p>
              <p>例如：当前页面匹配的子路由页面或引入的组件，则其子页面或组件不能使用<code>&lt;kt-app&gt;&lt;/kt-app&gt;</code>标签。</p>
              <div class="code">
                //当你需要使用的时候，你自需要放到最外层如下所示:<br>
                &lt;kt-app&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;//TODO: 此处添加header、content、footer容器标签，不可以添加其它标签<br>
                &lt;/kt-app&gt;<br>
              </div>`
            },
            {
              title: 'kt-header组件',
              subtitle: '单页面应用的header容器组件,可选',
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
              subtitle: '但页面应用的content容器组件，必选',
              content: `<p>此组件通常与header、footer组件一起使用。其被设计为自适应父容器高度。当存在header、footer时，会添加相应的has-class类！</p>
              <p>同时，其被设计为默认使用<code>&lt;kt-scroll&gt;&lt;/kt-scroll&gt;</code>组件，因此提供是否支持滚动、是否支持上拉加载、下拉刷新等功能！</p>
              <div class="code">
              //1、使用默认功能<br>
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
            { title: 'kt-footer组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
            { title: 'kt-scroll组件', subtitle: '您来到了知识的荒原！', content: 'just a test' }
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
            { title: '警告框组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
            { title: '确认框组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
            { title: '弹出框组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
            { title: '返回顶部组件', subtitle: '您来到了知识的荒原！', content: 'just a test' }
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
    }
  }
}
