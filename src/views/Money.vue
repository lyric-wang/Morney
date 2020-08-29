<template>
  <div>
    <Layout class="layout" :message="'spread'">
      <Number :value.sync="output" />
      <Type :value.sync="type" />
      <Note v-on:update:value="note=$event" />
      <Tag :taglist.sync="taglist" class="money-tag" />
      <div>{{output}}</div>
    </Layout>
  </div>
</template>

<script>
import Tag from "@/components/money/tag.vue";
import Note from "@/components/money/note.vue";
import Number from "@/components/money/number.vue";
import Type from "@/components/money/type.vue";
export default {
  data() {
    return {
      taglist: ["衣", "食", "住", "行"],
      note: "",
      type: "-",
      output: "0",
    };
  },
  components: {
    Tag,
    Note,
    Number,
    Type,
  },
};
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