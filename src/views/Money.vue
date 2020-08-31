<template>
  <div>
    <Layout class="layout" :message="'spread'">
      <Number :value.sync="record.output" v-on:submit="submit" />
      <Type :value.sync="record.type" />
      <Note v-on:update:value="record.note=$event" />
      <Tag @update:selectedTags="record.selectedTags=$event" class="money-tag" />
    </Layout>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Tag from "@/components/money/tag.vue";
import Note from "@/components/money/note.vue";
import Number from "@/components/money/number.vue";
import Type from "@/components/money/type.vue";
import { Component, Watch } from "vue-property-decorator";
import { recordListModel } from "@/store/recordListModel";

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
  recordList = recordListModel.fetchRecords();
  submit() {
    recordListModel.createRecord(this.record);
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