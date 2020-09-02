<template>
  <div>
    <Layout>
      <Tab :table="NameTable" :value.sync="value" />
    </Layout>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tab from "@/components/Tab.vue";

@Component({
  components: { Tab },
})
export default class Statistics extends Vue {
  value = "-";
  recordList = this.$store.state.recordList;
  NameTable: NameTable = [
    { name: "支出", value: "-" },
    { name: "收入", value: "+" },
  ];
}
</script>

<style lang="scss" scoped>
::v-deep li.selected {
  background: white;
  &::after {
    display: none;
  }
}
</style>