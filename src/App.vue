<template>
  <div id="app">
    <transition
      name="slide-fade"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
    >
      <router-view />
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
body {
  margin: 0;
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// .slide-fade {
//   position: fixed;
//   left: 0;
//   right: 0;
//   width: 100%;
//   background-color: white;
// }
// .slide-fade-enter,
// .slide-fade-leave-to {
//   left: 0;
//   top: 0;
//   right: 0;
//   position: absolute;
//   // transform: translateX(-500px) scale(1);
//   opacity: 1;
// }
// .slide-fade-enter-active {
//   background-color: white;
//   // transition: all 9s ease;
// }
// .slide-fade-leave-active {
//   transition: all 1s ease;
//   background-color: white;
//   // transform: translateX(500px) scale(1);
//   z-index: 100;
// }
</style>
