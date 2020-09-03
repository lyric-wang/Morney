<template>
  <div>
    <div class="tag">
      <div class="current-wrapper">
        <ul class="current">
          <li
            :class="selected.indexOf(tag)>=0?'selected':'unselected'"
            @click="toggle(tag)"
            v-for="tag in taglist"
            :key="tag.id"
          >{{tag.name}}</li>
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
import { Component, Prop, Watch } from "vue-property-decorator";
import { clone } from "@/lb/clone.ts";
@Component
export default class Tags extends Vue {
  @Prop(Array) selectedTags: Tag[] | undefined;
  taglist = this.$store.state.tagList;
  get selected() {
    return this.selectedTags;
  }
  toggle(tag: Tag) {
    console.log(this.selected);
    if (this.selected!.indexOf(tag) >= 0) {
      const index = this.selected!.indexOf(tag);
      this.selected!.splice(index, 1);
    } else {
      this.selected!.push(tag);
    }
    this.$emit("update:selectedTags", this.selected);
  }
  add() {
    this.$store.commit("createTags");
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