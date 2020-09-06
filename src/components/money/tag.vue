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
  max-height: calc(100vh - 216px - 64px - 64px - 51px - 44px);
  min-height: 88px;
  > .current-wrapper {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    > .current {
      display: flex;
      flex-wrap: wrap;
      $width: 94.6vw;
      margin-right: -$width/50;
      > li {
        margin: 2px 2% 2px 0;
        border-radius: 12px;
        width: 18%;
        $height: 24px;
        height: $height;
        background: #d8c0c0;
        color: white;
        text-align: center;
        line-height: $height;
        overflow: visible;
        border: 1px solid transparent;
        &.selected {
          background: #c19191;
          color: white;
          z-index: 1;
          animation: 0.15s ding 2 alternate-reverse;
          /* antialiasing */
          outline: 1px solid transparent;
          -webkit-backface-visibility: hidden;
          transform: translateZ(0);
          will-change: transform;
          -webkit-perspective: 1000;
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
@keyframes ding {
  25% {
    transform: rotate(3deg) translateZ(0);
    /* antialiasing */
    outline: 1px solid transparent;
    -webkit-backface-visibility: hidden;
    will-change: transform;
    -webkit-perspective: 1000;
  }
  50% {
    transform: rotate(-3deg) translateZ(0);
    /* antialiasing */
    outline: 1px solid transparent;
    -webkit-backface-visibility: hidden;
    will-change: transform;
    -webkit-perspective: 1000;
  }
  75% {
    transform: rotate(3deg) translateZ(0);
    /* antialiasing */
    outline: 1px solid transparent;
    -webkit-backface-visibility: hidden;
    will-change: transform;
    -webkit-perspective: 1000;
  }
  100% {
    transform: rotate(3deg) translateZ(0);
    /* antialiasing */
    outline: 1px solid transparent;
    -webkit-backface-visibility: hidden;
    will-change: transform;
    -webkit-perspective: 1000;
  }
}
</style>