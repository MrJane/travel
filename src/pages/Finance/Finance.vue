<template>
    <div class="finance-wrap">
      <div class="my-info-wrapper">
        <div class="info-header">
          <div class="header-left">
            <i class="iconfont back-icon">&#xe624;</i>
          </div>
        </div>
        <img src="https://s.qunarzz.com/finance/finance_center_rn/images/activate_ious5.jpg" alt="">
      </div>
      <div class="rn-view">
        <div class="view-item">
          拿去花
        </div>
        <div class="view-item"></div>
        <div class="view-item"></div>
        <div class="view-item"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Finance'
    };
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .finance-wrap
    height 3.586rem
    width 100%
    background #eee
  .rn-view
    margin-top .2rem
    background #fff
    display flex
    flex-wrap wrap
    .view-item
      display flex
      width 50%
      height 1.5rem
      background #25a4bb
      align-items center
      text-align center
      justify-content center
  .my-info-wrapper
    position relative
    overflow hidden
    height 3.2rem
    img
      width 100%
      height 100%
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
