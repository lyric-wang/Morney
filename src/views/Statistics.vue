<template>
  <div>
    <Layout>
      <div class="head">账单</div>
      <WhichTime />
      <Bills />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Type from "@/components/statistics/type.vue";
import WhichTime from "@/components/statistics/WhichTime.vue";
import Bills from "@/components/statistics/Bills.vue";
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
.head {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9e9a91;
}
</style>
