/**
 * @author wang.kt
 * @date 2020-06-08 21:04:47
 * @version 1.0
 * @description 功能描述
 * ----------------------------------------------------
 * date          author         desc
 * 2020-06-08 21:04:47 wang.kt      初始化文档
 * ----------------------------------------------------
 * */
/* eslint-disable */
export default {
  name: 'kt-slides',
  data() {
    return {
      baseStyle: '',
      transformStyle: '',
      pageStyle: '',
      size: {},
      pages: [],
      currentIndex: 0,
      opts: {
        auto: false,
        distance: 0.1
      },
      touch: {
        sx: 0,
        sy: 0,
        xdis: 0,
        ydis: 0,
        xt: 0,
        yt: 0
      }
    }
  },
  created() {

  },
  mounted() {
    this.init()
  },
  computed: {
    style: function () {
      return this.baseStyle + this.transformStyle
    }
  },
  methods: {
    init: function () {
      this.size.width = this.$el.clientWidth
      const len = this.$children.length
      for (let i = 0; i < len; i++) {
        const slide = this.$children[i].$el
        slide.style = 'width:' + this.size.width + 'px';
        this.pages.push(i)
      }
      this.baseStyle = 'height:100%;width:' + (this.size.width * len) + 'px;';
      this.pageStyle = 'width:' + (25 * len) + 'px';

    },
    /**
     * 滚动到某页面
     * @param {number} index id
     * @param {number} dis 当前距离
     */
    slideTo: function (index, dis) {
      let style = '';
      if (this.currentIndex != index) {
        this.currentIndex = index;
        style = 'transition: transform 1s;'
      } else {
        let s = Math.abs(dis / this.size.width);
        style = 'transition: transform ' + s + 's;'
      }
      this.transformStyle = 'transform:translateX(' + (- this.currentIndex * this.size.width) + 'px);' + style;
    },
    slide: function (dis) {
      this.transformStyle = 'transform:translateX(' + dis + 'px);'
    },
    /**
     * 显示被限制滑动的动画特效
     * @param {mumber} x 
     * @param {number} y  
     */
    showLimitAnimation: function (x, y) {
      let ctx = this.$refs.ktcanvas.getContext('2d');
      ctx.lineWidth = 6;
      ctx.strokeStyle = "#333";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(x, y, 0, this.$el.clientHeight);
      ctx.stroke();
    },
    touchstart: function (event) {
      this.touch.sx = event.touches[0].clientX;
      this.touch.xdis = 0;
    },
    touchend: function (event) {
      // 判断distances是否
      let limit = this.size.width * this.opts.distance;
      let tempIndex = this.currentIndex;
      if (this.touch.xdis > limit) {
        tempIndex--;
      } else if (this.touch.xdis < -limit) {
        tempIndex++;
      }
      this.slideTo(tempIndex, this.touch.xdis);
    },
    touchmove: function (event) {

      this.touch.xdis = event.touches[0].clientX - this.touch.sx;

      if (this.currentIndex < 1 && this.touch.xdis > 0) {
        this.touch.xdis = 0
      } else if (this.currentIndex == this.$children.length - 1 && this.touch.xdis < 0) {
        this.touch.xdis = 0
      }

      this.touch.xt = - this.currentIndex * this.size.width + this.touch.xdis

      // this.showLimitAnimation()

      this.slide(this.touch.xt)
    }
  }
}
