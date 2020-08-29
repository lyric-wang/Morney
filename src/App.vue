<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/style.scss";
@import "@/assets/style/reset.scss";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $font-hei;
  font-size: 16px;
}
body {
  background: #f5f5f5;
}
</style>
