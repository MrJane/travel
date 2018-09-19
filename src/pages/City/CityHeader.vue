<template>
  <div class="city-header">
    <router-link :to="{name:'home'}">
      <div class="header-left">
        <i class="iconfont back-icon">&#xe624;</i>
      </div>
    </router-link>
    城市选择
  </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  };
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .city-header
    position relative
    height: $headerHeight
    line-height $headerHeight
    width: 100%
    background $bgColor
    color #fff
    text-align center
    .header-left
      position absolute
      left 0
      width .64rem
      .back-icon
        display block
        text-align center
        font-size .4rem
        color #fff
</style>
