<template>
  <div>
    <Layout>
      <div class="tags">
        <li class="tag">
          <span>衣</span>
          <svg class="icon">
            <use xlink:href="#icon-right" />
          </svg>
        </li>
        <li class="tag">
          <span>食</span>
          <svg class="icon">
            <use xlink:href="#icon-right" />
          </svg>
        </li>
        <li class="tag">
          <span>住</span>
          <svg class="icon">
            <use xlink:href="#icon-right" />
          </svg>
        </li>
        <li class="tag">
          <span>行</span>
          <svg class="icon">
            <use xlink:href="#icon-right" />
          </svg>
        </li>
      </div>
      <div class="new">
        <button>新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script>
import Try from "@/components/try.vue";
export default {};
</script>

<style lang="scss" scoped>
.icon {
  width: 24px;
  height: 24px;
  //vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: red;
  margin-right: 8px;
}
.tags {
  padding-left: 20px;
  background: white;
  .tag {
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
  }
}
.new {
  display: flex;
  justify-content: center;
  position: relative;
  button {
    position: absolute;
    top: 40px;
    height: 40px;
    width: 100px;
    background: #767676;
    border: none;
    border-radius: 4px;
    color: white;
  }
}
</style>