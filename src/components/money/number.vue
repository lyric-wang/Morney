<template>
  <div>
    <div class="output">100</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="OK">OK</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.output {
  height: 64px;
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
  align-items: center;
  font-size: 36px;
  font-family: Consolas, monospace;
  box-shadow: inset 0px 5px 5px -5px #a0a0a0, inset 0px -5px 5px -5px #a0a0a0;
}
.buttons {
  $height: 32vh;
  height: $height;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  > button {
    width: 25%;
    height: $height/4;
    border: none;
    &.OK {
      height: $height/2;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    &.zero {
      width: 50%;
      height: $height/4;
    }
    $gc: #f2f2f2;
    &:nth-child(1) {
      background: $gc;
    }
    &:nth-child(2),
    &:nth-child(5) {
      background: darken($gc, 4%);
    }
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(9) {
      background: darken($gc, 4 * 2%);
    }
    &:nth-child(4),
    &:nth-child(7),
    &:nth-child(10) {
      background: darken($gc, 4 * 3%);
    }
    &:nth-child(8),
    &:nth-child(11),
    &:nth-child(13) {
      background: darken($gc, 4 * 4%);
    }
    &:nth-child(14) {
      background: darken($gc, 4 * 5%);
    }
    &:nth-child(12) {
      background: darken($gc, 4 * 6%);
    }
  }
}
</style>