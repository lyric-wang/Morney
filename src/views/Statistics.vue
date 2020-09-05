<template>
  <div>
    <Layout class="layout">
      <WhichTime :value.sync="time" />
      <Bills class="bills" :time="time" />
      <Tab />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Type from "@/components/statistics/type.vue";
import WhichTime from "@/components/statistics/WhichTime.vue";
import Bills from "@/components/statistics/bills.vue";
import { clone } from "@/lb/clone.ts";
type List = { title: string; total?: number; content: RecordItem[] }[];

@Component({
  components: { Bills, WhichTime },
})
export default class Statistics extends Vue {
  type = "-";
  time = "day";
}
</script>

<style lang="scss" scoped>
::v-deep .contents {
  display: flex;
  flex-direction: column;
  .bills {
    flex-grow: 1;
  }
}
</style>
