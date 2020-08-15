<template>
  <div id="app">
    <kt-slide-anim :rootList="rootList">
      <keep-alive>
        <router-view />
      </keep-alive>
    </kt-slide-anim>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      rootList: {
        '/': true,
        '/work': true,
        '/unvi': true,
        '/person': true
      }
    }
  }
}
</script>

<style lang="scss">

@import "./assets/sass/index";

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
