<template>
  <div>
    <Layout class="layout" :message="'spread'">
      <Number :value.sync="record.output" v-on:submit="submit" />
      <Type :value.sync="record.type" />
      <Note v-on:update:value="record.note=$event" />
      <Tag
        :taglist.sync="taglist"
        @update:selectedTags="record.selectedTags=$event"
        class="money-tag"
      />
    </Layout>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Tag from "@/components/money/tag.vue";
import Note from "@/components/money/note.vue";
import Number from "@/components/money/number.vue";
import Type from "@/components/money/type.vue";
import Component from "vue-class-component";
type Record = {
  selectedTags: string[];
  note: string;
  type: string;
  output: string;
  date?: Date; //意思就是date可以不存在
};
@Component({
  components: {
    Tag,
    Note,
    Number,
    Type,
  },
})
export default class Money extends Vue {
  record: Record = {
    selectedTags: [],
    note: "",
    type: "-",
    output: "0",
  };
  recordList: Record[] = JSON.parse(localStorage.getItem("record") || "[]");
  taglist = ["衣", "食", "住", "行"];
  submit() {
    const record2 = JSON.parse(JSON.stringify(this.record));
    record2.date = new Date();
    this.recordList.push(record2);
    localStorage.setItem("record", JSON.stringify(this.recordList));
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