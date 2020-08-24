<template>
  <div>
    <div class="tag">
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <button class="add">新增标签</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tag {
  font-size: 14px;
  padding: 10px;
  > .current {
    display: flex;
    > li {
      margin-right: 10px;
      border-radius: 12px;
      width: 50px;
      $height: 24px;
      height: $height;
      background: #d9d9d9;
      text-align: center;
      line-height: $height;
    }
  }
  > .add {
    background: transparent;
    border: none;
    color: #999;
    border-bottom: 1px solid;
    padding: 10px 3px 1px 3px;
  }
}
</style>