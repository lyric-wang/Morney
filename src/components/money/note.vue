<template>
  <div>
    <label class="note">
      <span>{{x}}</span>
      <input type="text" placeholder="在这里输入备注" class="input" @input="xxx" />
    </label>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      x: "",
    };
  },
  methods: {
    xxx(e) {
      this.x = e.target.value;
    },
  },
});
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