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
        { name: '简介', component: 'p-summarys', isLoad: true },
        { name: '基础', component: 'p-introduction', isLoad: false },
        { name: '弹窗', component: 'p-introduction', isLoad: false },
        { name: '滑动', component: 'p-introduction', isLoad: false },
        { name: '布局', component: 'p-introduction', isLoad: false },
        { name: '动画', component: 'p-introduction', isLoad: false }
      ],
      compData: [
        [],
        [
          { title: '按钮组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
          { title: '图片组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
          { title: '图标组件', subtitle: '您来到了知识的荒原！', content: 'just a test' }
        ], [
          { title: '警告框组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
          { title: '确认框组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
          { title: '弹出框组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
          { title: '返回顶部组件', subtitle: '您来到了知识的荒原！', content: 'just a test' }
        ], [
          { title: '标签栏组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
          { title: '标签组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
          { title: '滑动栏组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
          { title: '滑动组件', subtitle: '您来到了知识的荒原！', content: 'just a test' }
        ], [
          { title: 'App组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
          { title: 'Header组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
          { title: 'Footer组件', subtitle: '您来到了知识的荒原！', content: 'just a test' },
          { title: '滚动组件', subtitle: '您来到了知识的荒原！', content: 'just a test' }
        ], [
          { title: '滑动动画', subtitle: '您来到了知识的荒原！', content: 'just a test' },
          { title: '弹出动画', subtitle: '您来到了知识的荒原！', content: 'just a test' }
        ]
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
