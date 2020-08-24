<template>
  <div>
    <Layout class="layout" :message="'spread'">
      <Number />
      <Type />
      <Note />
      <Tag class="money-tag" />
    </Layout>
  </div>
</template>

<script>
import Tag from "@/components/money/tag.vue";
import Note from "@/components/money/note.vue";
import Number from "@/components/money/number.vue";
import Type from "@/components/money/type.vue";
export default {
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
  border: 1px solid blue;
}
</style>