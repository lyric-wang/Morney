<template>
  <div class="nav">
    <router-link to="/money" class="a">
      <svg class="icon">
        <use xlink:href="#icon-money" />
      </svg>
      <div>记一笔aaaaaa</div>
    </router-link>
    <router-link to="/labels" class="a">
      <svg class="icon">
        <use xlink:href="#icon-label" />
      </svg>
      <div>标签</div>
    </router-link>
    <router-link to="/statistics" class="a">
      <svg class="icon">
        <use xlink:href="#icon-barchart" />
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
  border: 1px solid red;
  display: flex;
  justify-content: space-evenly;
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
  border: 1px solid black;
  text-decoration: none;
  color: #aaa;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>