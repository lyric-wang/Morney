<template>
  <div>
    <label class="note">
      <span>备注</span>
      <input class="input" type="text" placeholder="在这里输入备注" @input="xxx" :value="value" />
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
  background: #f0f1f1;
  display: flex;
  align-items: center;
  padding: 16px;
  font-size: 14px;
  color: #666666;
}
.input {
  margin-left: 10px;
  border: none;
  background: transparent;
  flex-grow: 1;
  color: #666666;
}
</style>