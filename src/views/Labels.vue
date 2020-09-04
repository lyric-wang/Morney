<template>
  <div>
    <Layout>
      <div class="labelWrapper">
        <div class="tagsWrapper">
          <div class="tags">
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
        </div>
        <div class="new">
          <button @click="add">新建标签</button>
        </div>
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
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  .tagsWrapper {
    flex-grow: 1;
    overflow: auto;
    border: 1px solid blue;
    .tags {
      padding-left: 20px;
      background: white;
      height: 440px;
      overflow: auto;
      border: 1px solid green;
      .tag {
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        .icon {
          width: 24px;
          height: 24px;
          //vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
          color: #333;
          margin-right: 8px;
        }
      }
    }
  }
  .new {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    padding: 20px 0;
    button {
      height: 40px;
      width: 100px;
      background: #767676;
      border: none;
      border-radius: 4px;
      color: white;
    }
  }
}
</style>