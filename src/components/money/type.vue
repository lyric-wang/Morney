<template>
  <div>
    <ul class="type">
      <li :class="cl==='-'&&'selected'" @click="cl='-'">支出</li>
      <li :class="cl==='+'&&'selected'" @click="cl='+'">收入</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Watch, Prop } from "vue-property-decorator";
@Component
export default class Types extends Vue {
  @Prop(String) value: string | undefined;
  cl = this.value;
  @Watch("cl", { immediate: true })
  onClChanged() {
    this.$emit("update:value", this.cl);
  }
}
//下面这种写法可以
//export default Vue.extend({
//  data() {
//    return {
//      cl: "+",
//    };
//  },
//  methods: {
//    trans(el: string) {
//      this.cl = el;
//      return this.cl;
//    },
//  },
//});
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
}
</style>