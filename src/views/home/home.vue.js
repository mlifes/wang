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
    'p-basic': () => import('./basic/basic.vue'),
    'p-popup': () => import('./popup/popup.vue'),
    'p-article': () => import('./article/article.vue')
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
        { name: '基础', component: 'p-basic', isLoad: false },
        { name: '弹窗', component: 'p-popup', isLoad: false },
        { name: '弹窗', component: 'p-popup', isLoad: false },
        { name: '简介', component: 'p-summarys', isLoad: false },
        { name: '基础', component: 'p-basic', isLoad: false },
        { name: '弹窗', component: 'p-popup', isLoad: false },
        { name: '弹窗', component: 'p-popup', isLoad: false }
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
