<template>
  <div>
    <div class="tag">
      <div class="current-wrapper">
        <ul class="current">
          <li
            :class="selectlist.indexOf(tag)>=0?'selected':'unselected'"
            @click="choose(tag)"
            v-for="tag in taglist"
            :key="tag"
          >{{tag}}</li>
        </ul>
      </div>
      <div>
        <button class="add" @click="add">新增标签</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Tag extends Vue {
  @Prop(Array) taglist: string[] | undefined;
  selectlist: string[] = [];
  choose(tag: string) {
    if (this.selectlist.indexOf(tag) >= 0) {
      this.selectlist.pop();
    } else {
      this.selectlist.push(tag);
    }
  }
  add() {
    const inputInfo = window.prompt("请输入标签名");
    if (inputInfo === "") {
      window.alert("标签名不能为空");
    } else if (this.selectlist.indexOf(inputInfo!) >= 0) {
      window.alert("标签已存在");
    } else {
      this.$emit("update:taglist", this.taglist!.concat([inputInfo]));
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
  font-size: 14px;
  padding: 2.7vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  > .current-wrapper {
    height: 100%;
    overflow: auto;
    > .current {
      display: flex;
      flex-wrap: wrap;
      $width: 94.6vw;
      margin-right: -$width/50;
      > li {
        margin-right: 2%;
        margin-top: 5px;
        border-radius: 12px;
        width: 18%;
        $height: 24px;
        height: $height;
        background: #d9d9d9;
        text-align: center;
        line-height: $height;
        &.selected {
          background: #333;
          color: white;
        }
      }
    }
  }
}
.add {
  background: transparent;
  border: none;
  color: #999;
  border-bottom: 1px solid;
  padding: 10px 3px 1px 3px;
  bottom: 0;
}
</style>