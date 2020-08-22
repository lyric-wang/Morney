<template>
  <div class="nav-wrapper">
    <div class="content">Money.vue</div>
    <Nav />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex-grow: 1;
  border: 1px solid green;
  overflow: auto;
}
</style>