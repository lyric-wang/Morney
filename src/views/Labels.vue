<template>
  <div>
    <Layout>
      <div class="one">
        <Try class="try" />
      </div>
    </Layout>
  </div>
</template>

<script>
import Try from "@/components/try.vue";
export default {
  components: {
    Try,
  },
};
</script>

<style lang="scss" scoped>
.one {
  height: 100vh;
  border: 1px solid red;
  display: flex;
  overflow: hidden;
}
.try {
  flex-grow: 1;
}
</style>