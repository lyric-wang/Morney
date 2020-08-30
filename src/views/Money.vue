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
import { tagListModel } from "@/models/tagListModel";

@Component({
  components: {
    Tag,
    Note,
    Number,
    Type,
  },
})
export default class Money extends Vue {
  record: RecordItem = {
    selectedTags: [],
    note: "",
    type: "-",
    output: "0",
  };
  recordList: RecordItem[] = JSON.parse(localStorage.getItem("record") || "[]");
  taglist = tagListModel.fetch();
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