<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont back-icon">&#xe624;</i>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe632;</i>输入城市景点/游玩/主题
    </div>
    <div class="header-right">
    城市
    <i class="iconfont arrow-icon">&#xe64a;</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Head'
  };
</script>

<style lang="stylus" scoped>
/*@import "~@/assets/stylus/variables.styl"*/
@import "~styles/variables.styl"
  /*@import "../../../assets/stylus/varibless.styl" 相对路径太长 ../../../可以用@表示其实就是找到src目录
  *webpack.base.conf 这有设置@符号表示src目录，但是在其他样式文件引入也想用@符号前面要加个~线，@~/assets/stylus/
  */
  .header
    display: flex
    height: .86rem
    line-height .86rem
    width: 100%
    background $bgColor
    color #fff
    .header-input
      flex 1
      padding-left .2rem
      line-height .64rem
      height .64rem
      margin-top .12rem
      margin-left .2rem
      background #ffffff
      border-radius .1rem
      color #ccc
    .header-left
      width .64rem
      float left
      .back-icon
        display block
        text-align center
        /*箭头靠左可以给它设置display block 然后居中即可 */
        font-size .4rem
    .header-right
      width 1.24rem
      text-align center
      float right
      .arrow-icon
        font-size .24rem
</style>
