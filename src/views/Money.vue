<template>
  <div>
    <Layout>
      <Tag />
      <Note />
      <Number />
    </Layout>
  </div>
</template>

<script>
import Tag from "@/components/money/tag.vue";
import Note from "@/components/money/note.vue";
import Number from "@/components/money/number.vue";
export default {
  components: {
    Tag,
    Note,
    Number,
  },
};
</script>

<style lang="scss" scoped>
</style>