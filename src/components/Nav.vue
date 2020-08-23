<template>
  <div class="nav">
    <router-link to="/money" class="a">
      <svg class="icon">
        <use xlink:href="#icon-money" />
      </svg>
      <div>记一笔</div>
    </router-link>
    <router-link to="/labels" class="a">
      <svg class="icon">
        <use xlink:href="#icon-label" />
      </svg>
      <div>标签</div>
    </router-link>
    <router-link to="/statistics" class="a">
      <svg class="icon">
        <use xlink:href="#icon-tongji" />
      </svg>
      <div>统计</div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
}
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
a {
  width: 33.33333%;
  color: #aaa;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  padding: 2px 0;
}
</style>