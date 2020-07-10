/**
 * @author your name
 * @date 2020-06-05 12:11:37
 * @version 1.0
 * @description 功能描述
 * ----------------------------------------------------
 * date          author         desc
 * 2020-06-05 12:11:37 your name      初始化文档
 * ----------------------------------------------------
 * */

import home from './home/home.vue'
import work from './work/work.vue'
import unvi from './unvi/unvi.vue'
import person from './person/person.vue'

export default {
  name: 'tabs',
  components: {
    'kt-home': home,
    'kt-work': work,
    'kt-unvi': unvi,
    'kt-person': person
  },
  data () {
    return {
      tabsOpts: {
        ratio: 0.5,
        color: 'green'
      }
    }
  },
  methods: {
    onSlidingTransformAnim: function (data) {
      this.$refs.ktTabs.bindTransformAnim(data)
    },
    onTabClick: function (index) {
      this.$refs.ktSlides.slideTo(index, 0)
    }
  }
}
