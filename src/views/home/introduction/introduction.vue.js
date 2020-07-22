/**
  * @author wang.kt
  * @date 2020-07-21 13:39:40
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * 2020-07-21 13:39:40 wang.kt      初始化文档
  * ----------------------------------------------------
  * */
export default {
  name: 'introduction',
  data () {
    return {
      myOpts: {
        canRefresh: true,
        canLoadMore: false,
        noData: false
      }
    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    onRefresh () {

    },
    onLoadMore () {

    },
    onResult (value) {
      if (value) this.$emit('onResult', value)
    }
  }
}
