<template>
  <div class="nav-wrapper">
    <div class="content" :class="message">
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
}
.content {
  flex-grow: 1;
}
</style>