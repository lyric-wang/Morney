<template>
  <div>
    <ul class="type">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.type {
  font-size: 24px;
  background: #c4c4c4;
  display: flex;
  height: 64px;
  align-items: center;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      position: absolute;
      bottom: 0;
      content: "";
      width: 100%;
      height: 64px;
      border-bottom: 4px solid;
    }
  }
  > .selected::after {
  }
}
</style>