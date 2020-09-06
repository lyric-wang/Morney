<template>
  <div>
    <Layout>
      <div class="labelWrapper">
        <div class="head">
          <span>标签列表</span>
          <svg class="icon" @click="add">
            <use xlink:href="#icon-add" />
          </svg>
        </div>
        <div class="tags" v-if="tagList.length!=0">
          <router-link
            :to="`/EditLabel/${tag.id}`"
            class="tag"
            v-for="tag in tagList"
            :key="tag.id"
          >
            <span>{{tag.name}}</span>
            <svg class="icon">
              <use xlink:href="#icon-right" />
            </svg>
          </router-link>
        </div>
        <div v-else class="none">None</div>
      </div>
    </Layout>
  </div>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Labels extends Vue {
  tagList = this.$store.state.tagList;
  add() {
    this.$store.commit("createTags");
  }
}
</script>

<style lang="scss" scoped>
.labelWrapper {
  height: calc(100vh - 44px);
  display: flex;
  flex-direction: column;
  .head {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9e9a91;
    position: relative;
    background: #f0f1f1;
    .icon {
      width: 20px;
      height: 20px;
      fill: currentColor;
      overflow: hidden;
      color: #b6b6b6;
      position: absolute;
      right: 0;
      margin: 0 10px 0 0;
    }
  }
  .tags {
    padding-left: 20px;
    background: white;
    height: 440px;
    overflow: auto;
    flex-grow: 1;
    overflow: auto;
    .tag {
      height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;
      color: #666666;
      .icon {
        width: 24px;
        height: 24px;
        //vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        color: #666666;
        margin-right: 8px;
      }
    }
  }
  .none {
    margin-top: 10px;
    text-align: center;
    color: #8b8880;
    font-weight: bold;
  }
}
</style>