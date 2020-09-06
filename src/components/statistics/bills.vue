<template>
  <div class="wrapper">
    <Type :type.sync="type" />
    <v-touch v-on:swipeleft="current -= 1" v-on:swiperight="current += 1" class="ulWrapper">
      <ul class="bills">
        <li>
          <div class="title">
            <svg class="icon" @click="current -= 1">
              <use xlink:href="#icon-left" />
            </svg>
            <span>{{ currentTime }}</span>
            <svg class="icon" @click="current += 1">
              <use xlink:href="#icon-right" />
            </svg>
          </div>
          <div class="subtitle">
            <span v-if="type === '-'">支出</span>
            <span v-else>收入</span>
            <span class="total" v-if="currentList">
              {{
              "￥" + currentList.total
              }}
            </span>
            <span class="total" v-else>￥0.00</span>
          </div>
          <div v-if="currentList">
            <div class="content" v-for="record in currentList.content" :key="record.date">
              <span class="tags">{{ getName(record.selectedTags) }}</span>
              <span class="note">{{ record.note }}</span>
              <span class="output">{{ "￥" + record.output }}</span>
            </div>
          </div>
          <div v-else class="none">No Data</div>
        </li>
      </ul>
    </v-touch>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Type from "@/components/statistics/type.vue";
import { clone } from "@/lb/clone.ts";
import dayjs from "dayjs";
import VueTouch from "vue-touch";
Vue.use(VueTouch, { name: "v-touch" });
type List = { title: string; total?: number; content: RecordItem[] };
@Component({ components: { Type } })
export default class Bills extends Vue {
  @Prop(String) time: string | undefined;
  type = "-";
  current = 0;
  created() {
    console.log(dayjs("09/2020"));
  }
  get currentTime() {
    //当前展示的列表时间
    let now = "";
    const obj = new Date();
    if (this.time === "day") {
      now = dayjs().add(this.current, "day").format("DD/MM/YYYY");
      return now;
    } else if (this.time === "month") {
      now = dayjs().add(this.current, "month").format("MM/YYYY");
      return now;
    } else {
      now = dayjs().add(this.current, "year").format("YYYY");
      return now;
    }
  }
  get recordList() {
    return this.$store.state.recordList;
  }
  NameTable: NameTable = [
    { name: "支出", value: "-" },
    { name: "收入", value: "+" },
  ];
  get list(): List[] {
    const list: List[] = [];
    if (this.recordList.length === 0) {
      return [];
    } else {
      const a = clone(this.recordList).filter(
        (item: RecordItem) => item.type === this.type
      );

      if (JSON.stringify(a) === "[]") {
        return [];
      } else {
        const sorted = a.sort((a: RecordItem, b: RecordItem) => {
          return Date.parse(b.date!) - Date.parse(a.date!);
        }); //先按时间对记录排序，然后再循环，如果date相等就push，不相等就新建一项
        list[0] = { title: this.getDate(sorted[0].date), content: [sorted[0]] };
        let j = 0;
        for (let i = 1; i < sorted.length; i++) {
          if (
            this.getDate(sorted[i].date) === this.getDate(sorted[i - 1].date)
          ) {
            list[j].content.push(sorted[i]);
          } else {
            j = j + 1;
            list.push({
              title: this.getDate(sorted[i].date),
              content: [sorted[i]],
            });
          }
        }
      }
      list.map((item) => {
        const sum = item.content.reduce((sum: number, record) => {
          return sum + parseFloat(record.output);
        }, 0);
        item.total = parseFloat(sum.toFixed(2));
        return item;
      });
      return list;
    }
  }
  get currentList() {
    //当前展示的列表
    const a = this.currentTime;
    return (
      this.list.filter((item) => {
        return item.title === a;
      })[0] || undefined
    );
  }
  getName(Tags: Tag[]) {
    const tags = clone(Tags).reduce(function (result: string, item: Tag) {
      return result === "" ? item.name : result + "," + item.name;
    }, "");
    return tags === "" ? "无" : tags;
  }
  getDate(date: string) {
    const obj = new Date(Date.parse(date));
    if (this.time === "day") {
      return dayjs(date).format("DD/MM/YYYY");
    } else if (this.time === "month") {
      return dayjs(date).format("MM/YYYY");
    } else {
      return dayjs(date).format("YYYY");
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: #d0b3b3;
  display: flex;
  flex-direction: column;
  .ulWrapper {
    margin: 0 16px;
    border-radius: 10px 10px 0px 0px;
    flex-grow: 1;
    background: white;
    .bills {
      margin: 0 10px;
      background: white;
      border-radius: 10px 10px 0px 0px;
      .title {
        padding: 10px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 24px;
        color: #cc9999;
        border-bottom: 2px solid #cc9999;
        .icon {
          width: 1em;
          height: 1em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }
      }
      .subtitle {
        color: #8b8880;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px;
        .total {
          color: #cc9999;
        }
      }
      .content {
        padding: 10px 0;
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
          padding: 0 10px;
          color: #cc9999;
        }
      }
      .none {
        text-align: center;
        padding: 10px 0 0 0;
        color: #8b8880;
        border-top: 1px solid #dddddd;
        font-weight: bold;
      }
    }
  }
}
</style>
