<template>
  <Layout>
    <div class="edit">
      <svg class="icon" @click="$router.back()">
        <use xlink:href="#icon-left" />
      </svg>
      <span>编辑标签</span>
    </div>
    <label class="name">
      <span>标签名</span>
      <input type="text" :placeholder="tagList[index].name" @input="updateName" />
    </label>
    <div class="delete" @click="remove">
      <button>删除标签</button>
    </div>
  </Layout>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class EditLabel extends Vue {
  id = this.$route.params.id;
  index = this.tagList.map((item: Tag) => item.id).indexOf(this.id);
  created() {
    if (this.index === -1) {
      this.$router.replace("/404");
    }
  }
  get tagList() {
    return this.$store.state.tagList;
  }
  remove() {
    this.$store.commit("removeTags", this.index);
    this.$router.back();
  }
  updateName(e: InputEvent) {
    if (e.target) {
      this.$store.commit("UpdateTags", {
        id: this.id,
        name: (e.target as HTMLInputElement).value,
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.edit {
  height: 48px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 8px;
  .icon {
    position: absolute;
    left: 24px;
    width: 24px;
    height: 24px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
.name {
  display: flex;
  height: 48px;
  background: white;
  align-items: center;
  padding-left: 16px;
  font-size: 14px;
  input {
    margin-left: 10px;
    border: none;
    flex-grow: 1;
  }
}
.delete {
  position: relative;
  display: flex;
  justify-content: center;
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