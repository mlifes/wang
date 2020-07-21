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
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
img {
  border: 0 none;
  vertical-align: top;
}
i,
em {
  font-style: normal;
}
ol,
ul {
  list-style: none;
}
input,
select,
button,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-family: inherit;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  color: #666;
}
body {
  margin: 0 auto;
  min-width: 320px;
  max-width: 640px;
  height: 100%;
  font-size: 14px;
  font-family: -apple-system, Helvetica, sans-serif;
  line-height: 1.5;
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
}
input[type="text"],
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
body {
}
.scrollToX,.scrollToY{
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    display: none;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
