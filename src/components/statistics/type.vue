<template>
  <div class="typeWrapper">
    <ul class="type">
      <li>支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.typeWrapper {
  background: #f0f1f1;
  height: 36px;
  display: flex;
  align-items: center;
  .type {
    display: flex;
    height: 30px;
    width: 80vw;
    background: #e1e2e3;
    align-items: center;
    li {
      width: 50%;
      text-align: center;
    }
  }
}
</style>