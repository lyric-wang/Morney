<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link :to="`/EditLabel/${tag.id}`" class="tag" v-for="tag in tagList" :key="tag.id">
          <span>{{tag.name}}</span>
          <svg class="icon">
            <use xlink:href="#icon-right" />
          </svg>
        </router-link>
      </div>
      <div class="new">
        <button @click="add">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { tagListModel } from "@/store/tagListModel.ts";

@Component
export default class Labels extends Vue {
  tagList = tagListModel.fetch();
  add() {
    tagListModel.create();
    console.log(this.tagList);
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 24px;
  height: 24px;
  //vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: #333;
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