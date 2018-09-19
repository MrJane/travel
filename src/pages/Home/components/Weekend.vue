<template>
  <div class="weekend">
    <div class="title">周末去哪</div>
    <ul>
      <li class="item">
        <img class="img" src="http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg" alt="">
        <div class="info">
          <p class="info-title">自然户外好去处</p>
          <p class="info-desc">快快来到户外，感受花城的魅力</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'Weekend'
    };
</script>

<style lang="stylus" scoped>
  .weekend
    .title
      margin-top .2rem
      line-height .8rem
      background #eee
      text-indent .2rem
    .item
      overflow hidden
      .img
        width 100%
      .info
        flex 1
        padding .1rem
        button
          background #ff9300
          padding 0 .1rem
          border-radius 0.069rem
          margin-top .2rem
          color #fff
        .info-desc
          line-height .4rem
          color #ccc
        .info-title
          line-height .54rem
          font-size .28rem
</style>
