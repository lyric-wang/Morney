<template>
  <div>
    <ul class="type" :class="IsClass()">
      <li v-for="(item,index) in table" :key="index" @click="changeValue(item.value)">{{item.name}}</li>
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
    console.log("hi");
    console.log(value);

    this.$emit("update:value", value);
  }
  IsClass() {
    return {
      out: this.value === "-",
      in: this.value === "+",
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
  background: #d8c0c0;
  display: flex;
  align-items: center;
  position: relative;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 50%;
    border: 2px solid #b18181;
    transition: all 0.33s;
  }
  &.out:after {
    transform: translateX(0vw);
  }
  &.in:after {
    transform: translateX(50vw);
  }
}
</style>