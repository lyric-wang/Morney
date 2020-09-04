<template>
  <div>
    <Layout>
      <div class="head">账单</div>
      <Type />
      <ul v-if="JSON.stringify(this.list) !== '{}'">
        <li v-for="(item, index) in list" :key="index">
          <div class="title">
            <span>{{ item.title }}</span>
            <span>{{ item.total }}</span>
          </div>
          <div class="content" v-for="record in item.content" :key="record.date">
            <span class="tags">{{ getName(record.selectedTags) }}</span>
            <span class="note">{{ record.note }}</span>
            <span class="output">{{ record.output }}</span>
          </div>
        </li>
      </ul>
      <div v-else class="none">无记录</div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Type from "@/components/statistics/type.vue";
import { clone } from "@/lb/clone.ts";
type List = { title: string; total?: number; content: RecordItem[] }[];

@Component({
  components: { Type },
})
export default class Statistics extends Vue {
  value = "-";
  get recordList() {
    return this.$store.state.recordList;
  }
  NameTable: NameTable = [
    { name: "支出", value: "-" },
    { name: "收入", value: "+" },
  ];
  get list() {
    const list: List = [];
    if (this.recordList.length === 0) {
      return {};
    } else {
      const a = clone(this.recordList).filter(
        (item: RecordItem) => item.type === this.value
      );

      if (JSON.stringify(a) === "[]") {
        return {};
      } else {
        const sorted = a.sort((a: RecordItem, b: RecordItem) => {
          return Date.parse(b.date!) - Date.parse(a.date!);
        }); //先按时间对记录排序，然后再循环，如果date相等就push，不相等就新建一项
        list[0] = { title: sorted[0].date.split("T")[0], content: [sorted[0]] };
        let j = 0;
        for (let i = 1; i < sorted.length; i++) {
          if (
            sorted[i].date.split("T")[0] === sorted[i - 1].date.split("T")[0]
          ) {
            list[j].content.push(sorted[i]);
          } else {
            j = j + 1;
            list.push({
              title: sorted[i].date.split("T")[0],
              content: [sorted[i]],
            });
          }
        }
      }
      list.map((item) => {
        const sum = item.content.reduce((sum, record) => {
          return sum + parseFloat(record.output);
        }, 0);
        item.total = sum;
        return item;
      });
      return list;
    }
  }
  getName(Tags: Tag[]) {
    const tags = clone(Tags).reduce(function (result: string, item: Tag) {
      return result === "" ? item.name : result + "," + item.name;
    }, "");
    return tags === "" ? "无" : tags;
  }
}
</script>

<style lang="scss" scoped>
.head {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
}
.content {
  background: white;
  height: 40px;
  display: flex;
  align-items: center;
  .tags {
    padding: 0 10px;
  }
  .note {
    flex-grow: 1;
    color: #999;
  }
  .output {
    padding: 0 16px 0 0;
  }
}
.none {
  text-align: center;
  padding: 10px 0 0 0;
}
</style>
