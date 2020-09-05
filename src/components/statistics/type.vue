<template>
  <div class="typeWrapper">
    <ul class="type">
      <li :class="isClass('-')" @click="choose('-')">支出</li>
      <li :class="isClass('+')" @click="choose('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Type extends Vue {
  @Prop(String) type: string | undefined;
  myType = this.type;
  isClass(item: string) {
    return {
      selected: this.type === item,
    };
  }
  choose(str: string) {
    this.myType = str;
    this.$emit("update:type", str);
  }
}
</script>

<style lang="scss" scoped>
.typeWrapper {
  padding: 10px 0;
  display: flex;
  align-items: center;
  .type {
    display: flex;
    width: 100vw;
    align-items: center;
    li {
      display: inline-block;
      width: 50%;
      color: white;
      text-align: center;
      position: relative;
      &.selected::after {
        content: "";
        border: 10px solid;
        border-color: transparent transparent white transparent;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transition: all 1s;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
