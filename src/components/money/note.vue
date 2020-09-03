<template>
  <div>
    <label class="note">
      <span>备注</span>
      <input class="input" type="text" placeholder="在这里输入备注" @input="xxx" v-on:fuck="fuck" />
    </label>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Note extends Vue {
  @Prop(String) value: string | undefined;
  note = "";
  xxx(e: InputEvent) {
    this.note = (e.target as HTMLInputElement).value;
    this.$emit("update:value", this.note);
  }
  fuck() {
    (document.querySelectorAll(".input")[0] as HTMLInputElement).value = "";
  }
}
</script>

<style lang="scss" scoped>
.note {
  background: #f5f5f5;
  display: flex;
  align-items: center;
  padding: 16px;
  font-size: 14px;
}
.input {
  margin-left: 10px;
  border: none;
  background: transparent;
  flex-grow: 1;
}
</style>