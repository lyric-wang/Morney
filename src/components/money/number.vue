<template>
  <div>
    <div class="output">{{output}}</div>
    <div class="buttons">
      <button @click="inputfunc">1</button>
      <button @click="inputfunc">2</button>
      <button @click="inputfunc">3</button>
      <button @click="remove">删除</button>
      <button @click="inputfunc">4</button>
      <button @click="inputfunc">5</button>
      <button @click="inputfunc">6</button>
      <button @click="clear">清空</button>
      <button @click="inputfunc">7</button>
      <button @click="inputfunc">8</button>
      <button @click="inputfunc">9</button>
      <button @click="OK" class="OK">OK</button>
      <button @click="inputfunc" class="zero">0</button>
      <button @click="inputfunc">.</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Component, prop } from "vue-property-decorator";
@Component
export default class Number extends Vue {
  output = "0";
  inputfunc(event) {
    const input = event.currentTarget.textContent;
    if (this.output.length >= 16) {
      return;
    } else if (this.output === "0") {
      if ("1234567890".indexOf(input) >= 0) {
        this.output = input;
      } else if (input === ".") {
        this.output = this.output + input;
      }
    } else if (this.output.indexOf(".") >= 0 && input === ".") {
      return;
    } else {
      this.output += input;
    }
  }
  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      const l = this.output.length;
      this.output = this.output.slice(0, l - 1);
    }
  }
  clear() {
    this.output = "0";
  }
  OK() {
    return;
  }
}
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