<template>
  <div>
    <Layout class="layout" :message="'spread'">
      <Number />
      <Type />
      <Note v-on:update:value="value=$event" />
      <Tag class="money-tag" :taglist.sync="taglist" />
      <div>{{value}}</div>
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
      taglist: ["衣", "食", "住", "行", "aaa"],
      value: "",
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