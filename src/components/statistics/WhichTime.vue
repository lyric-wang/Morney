<template>
  <div class="back">
    <div class="timeWrapper">
      <div class="time" @click="year">按年</div>
      <div class="time" @click="month">按月</div>
      <div class="time" @click="day">按天</div>
      <div class="tab year"></div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class WhichTime extends Vue {
  year() {
    document.querySelectorAll(".tab")[0].classList.remove("day");
    document.querySelectorAll(".tab")[0].classList.remove("month");
    document.querySelectorAll(".tab")[0].classList.add("year");
  }
  month() {
    document.querySelectorAll(".tab")[0].classList.remove("year");
    document.querySelectorAll(".tab")[0].classList.remove("day");
    document.querySelectorAll(".tab")[0].classList.add("month");
  }
  day() {
    document.querySelectorAll(".tab")[0].classList.remove("year");
    document.querySelectorAll(".tab")[0].classList.remove("month");
    document.querySelectorAll(".tab")[0].classList.add("day");
  }
}
</script>

<style lang="scss" scoped>
.back {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f1f1;
  height: 40px;
  .timeWrapper {
    $left1: calc(80vw / 3);
    $left2: calc(calc(calc(80vw * 2) / 3) - 1px);
    background: #e1e2e3;
    border-radius: 4px;
    height: 32px;
    display: flex;
    width: 80vw;
    position: relative;
    transition: all 1s;
    .time {
      width: 33.3333%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }
    .tab {
      content: "";
      height: 28px;
      width: 33%;
      background: white;
      position: absolute;
      border-radius: 4px;
      margin: 2px 0;
      &.year {
        transform: translateX(2px);
      }
      &.month {
        margin-left: $left1;
      }
      &.day {
        margin-left: $left2;
      }
    }
  }
}
</style>