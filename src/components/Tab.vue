<template>
  <div>
    <ul class="type">
      <li
        :class="IsClass(item)"
        v-for="(item,index) in table"
        :key="index"
        @click="changeValue(item.value)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Watch, Prop } from "vue-property-decorator";
@Component
export default class Tab extends Vue {
  @Prop(String) value: string | undefined;
  @Prop(Array) table: NameTable | undefined;
  changeValue(value: string) {
    this.$emit("update:value", value);
  }
  IsClass(item: { name: string; value: string }) {
    return {
      selected: item.value === this.value,
    };
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