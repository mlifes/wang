/**
 * @author your name
 * @date 2020-06-08 09:59:15
 * @version 1.0
 * @description 功能描述
 * ----------------------------------------------------
 * date          author         desc
 * 2020-06-08 09:59:15 your name      初始化文档
 * ----------------------------------------------------
 * */
/* eslint-disable */
export default {
  name: 'kt-content',
  data() {
    return {
      myClass: ''
    }
  },
  props: {
    scroll: {
      default: function () {
        return ''
      }
    }
  },
  created() {

  },
  mounted() {
    if (this.scroll != '') {
      this.$el.style = 'overflow-' + this.scroll + ':scroll;'
    } else {
      this.$el.style = 'overflow: hidden;'
    }
    // 初始化resizecontent高度
    this.resizeHeight();
  },
  methods: {
    resizeHeight: function () {
      const header = document.getElementById("kt-header");
      const footer = document.getElementById("kt-footer");
      if (header) {
        this.myClass += 'has-header ';
      }
      if (footer) {
        this.myClass += 'has-footer ';
      }

    }
  }
}
