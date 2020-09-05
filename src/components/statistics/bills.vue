<template>
  <div class="wrapper">
    <Type :type.sync="type" />
    <div class="ulWrapper" v-if="JSON.stringify(this.list) !== '{}'">
      <ul class="bills">
        <li v-for="(item, index) in list" :key="index">
          <div class="title">
            <span>{{ item.title }}</span>
            <span class="total">{{ '￥'+item.total }}</span>
          </div>
          <div class="content" v-for="record in item.content" :key="record.date">
            <span class="tags">{{ getName(record.selectedTags) }}</span>
            <span class="note">{{ record.note }}</span>
            <span class="output">{{ '￥'+record.output }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="none">无记录</div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Type from "@/components/statistics/type.vue";
import { clone } from "@/lb/clone.ts";
type List = { title: string; total?: number; content: RecordItem[] }[];
@Component({ components: { Type } })
export default class Bills extends Vue {
  @Prop(String) time: string | undefined;
  type = "-";
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
        (item: RecordItem) => item.type === this.type
      );

      if (JSON.stringify(a) === "[]") {
        return {};
      } else {
        const sorted = a.sort((a: RecordItem, b: RecordItem) => {
          return Date.parse(b.date!) - Date.parse(a.date!);
        }); //先按时间对记录排序，然后再循环，如果date相等就push，不相等就新建一项
        list[0] = { title: this.getDay(sorted[0]), content: [sorted[0]] };
        let j = 0;
        for (let i = 1; i < sorted.length; i++) {
          if (this.getDay(sorted[i]) === this.getDay(sorted[i - 1])) {
            list[j].content.push(sorted[i]);
          } else {
            j = j + 1;
            list.push({
              title: this.getDay(sorted[i]),
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
  getDay(record: RecordItem) {
    return record.date!.split("T")[0];
  }
  getMonth(record: RecordItem) {
    const obj = new Date(Date.parse(record.date!));
    return obj.getFullYear() + "-" + obj.getMonth();
  }
  getYear(record: RecordItem) {
    const obj = new Date(Date.parse(record.date!));
    return obj.getFullYear();
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: #ef7270;
  .ulWrapper {
    height: 100%;
    margin: 0 16px;
    border-radius: 10px 10px 0px 0px;
    background: white;
    .bills {
      margin: 0 10px;
      background: white;
      border-radius: 10px 10px 0px 0px;
      .title {
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        justify-content: space-between;
        font-size: 24px;
        color: #8b8880;
        .total {
          color: #ef7270;
        }
      }
      .content {
        height: 40px;
        display: flex;
        align-items: center;
        border-top: 1px solid #dddddd;
        .tags {
          padding: 0 10px;
          color: #8b8880;
        }
        .note {
          flex-grow: 1;
          color: #8b8880;
        }
        .output {
          padding: 0 16px 0 0;
          color: #ef7270;
        }
      }
      .none {
        text-align: center;
        padding: 10px 0 0 0;
      }
    }
  }
}
</style>