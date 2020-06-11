<template>
  <div id="app">
    <transition
      name="slide-left"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      mode="in-out"
    >
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  methods: {
    beforeEnter: function(el) {
      console.log(el);
      console.log(1);
    },
    enter: function(el) {
      console.log(el);
      console.log(2);
    },
    afterEnter: function(el) {
      console.log(el);
      console.log(3);
    },
    enterCancelled: function(el) {
      console.log(el);
      console.log(4);
    },
    beforeLeave: function(el) {
      console.log(el);
      console.log(5);
    },
    leave: function(el) {
      console.log(el);
      console.log(6);
    },
    afterLeave: function(el) {
      console.log(el);
      console.log(7);
    },
    leaveCancelled: function(el) {
      console.log(el);
      console.log(8);
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.5s ease-in-out;
}
.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-leave-active {
  opacity: 0;
  // transform: translateX(100%);
}

.slide-left-enter {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-leave-active {
  opacity: 0;
  // transform: translateX(-100%);
}
</style>
