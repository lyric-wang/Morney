<template>
  <div>
    <Layout class="layout" :message="'spread'">
      <Number :value.sync="record.output" v-on:submit="submit" />
      <Tab :value.sync="record.type" :table="NameTable" />
      <Note :value.sync="record.note" :a="a" />
      <Tag :value.sync="record.type" :selectedTags.sync="record.selectedTags" class="money-tag" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Tag from "@/components/money/tag.vue";
import Note from "@/components/money/note.vue";
import Number from "@/components/money/number.vue";
import Tab from "@/components/Tab.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
    Tag,
    Note,
    Number,
    Tab,
  },
})
export default class Money extends Vue {
  record: RecordItem = {
    selectedTags: [],
    note: "",
    type: "-",
    output: "0",
  };
  NameTable: NameTable = [
    { name: "支出", value: "-" },
    { name: "收入", value: "+" },
  ];
  get recordList() {
    return this.$store.state.recordList;
  }
  a = 1;
  submit() {
    this.$store.commit("createRecord", {
      record: this.record,
      func: this.clear,
    });
    this.$emit("fuck");
  }
  clear() {
    this.record.selectedTags = [];
    this.record.note = "";
  }
}
</script>

<style lang="scss">
.spread {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
.money-tag {
  max-height: calc(100vh - 32vh - 64px - 64px - 51px - 44px);
}
</style>
