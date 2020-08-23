<template>
  <div>
    <div class="tag">
      <ul class="current">
        <li>衣</li>
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

  > li {
    border-radius: 20px;
    background: #d9d9d9;
    width: 40px;
    height: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>