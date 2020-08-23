<template>
  <div>
    <div class="tag">
      <ul class="current">
        <li>L</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
    <div class="add">新增标签</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.current {
  display: flex;
  font-size: 14px;

  > li {
    border: 1px solid red;
    width: 30px;
    height: 24px;
    background: #d9d9d9;
    display: flex;
    align-items: center;
  }
}
.add {
  font-size: 14px;
}
</style>