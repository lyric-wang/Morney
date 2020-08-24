<template>
  <div>
    <Layout>
      <Tag />
      <Note />
      <Type />
      <Number />
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

<style lang="scss" scoped>
</style>