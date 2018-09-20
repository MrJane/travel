<template>
  <div class="domestic">
    <header>
      <div class="info-header">
        <div class="header-left">
          <i class="iconfont back-icon">&#xe624;</i>
        </div>
      </div>
      div.
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Domestic'
  };
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .domestic
    header
      height 0.86rem
      background red
      .info-header
        width 100%
        position fixed
        top 0
        height $headerHeight
        .header-left
          width .64rem
          float left
          .back-icon
            display block
            text-align center
            font-size .4rem
            line-height $headerHeight
            color #fff
            font-weight bold
</style>
