<template>
  <div class="nav-wrapper">
    <div class="contents" :class="message">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  overflow: auto;
}
.contents {
  flex-grow: 1;
  overflow: auto;
}
.nav {
  width: 100vw;
  bottom: 0;
}
</style>