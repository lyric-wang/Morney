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
      <input type="text" v-model="currentInput" />
    </label>
    <div class="buttons">
      <button class="delete" @click="remove">删除标签</button>
      <button class="save" @click="updateName">保存</button>
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
  currentInput = this.tagList[this.index].name;
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
  updateName() {
    console.log(this.currentInput);
    const index = this.$store.state.tagList
      .map((item: Tag) => item.name)
      .indexOf(this.currentInput);
    if (index >= 0 && this.$store.state.tagList[index].id !== this.id) {
      window.alert("标签名已存在");
    } else if (
      this.currentInput === "" ||
      this.currentInput === undefined ||
      this.currentInput === null
    ) {
      window.alert("标签名不能为空");
    } else {
      this.$store.commit("UpdateTags", {
        id: this.id,
        name: this.currentInput,
      });
      window.alert("保存成功");
    }
  }
}
</script>

<style lang="scss" scoped>
.edit {
  height: 48px;
  background: #f0f1f1;
  color: #9e9a91;
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
  color: #666666;
  input {
    margin-left: 10px;
    border: none;
    flex-grow: 1;
  }
}
.buttons {
  padding-top: 80px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  .delete {
    height: 40px;
    width: 100px;
    background: #aaa;
    border: none;
    border-radius: 4px;
    color: white;
  }
  .save {
    width: 100px;
    background: #b18181;
    border-radius: 4px;
    border: none;
    color: white;
  }
}
</style>