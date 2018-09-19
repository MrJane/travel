<template>
    <div class="recommend">
      <div class="title">热销推荐</div>
      <ul>
        <li class="item">
            <img class="img" src="http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg" alt="">
          <div class="info">
            <p class="info-title">自然户外好去处</p>
            <p class="info-desc">快快来到户外，感受花城的魅力</p>
            <button>查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'Recommend'
    };
</script>

<style lang="stylus" scoped>
  .recommend
    .title
      margin-top .2rem
      line-height .8rem
      background #eee
      text-indent .2rem
    .item
      display flex
      height 1.9rem
      overflow hidden
      .img
        width 1.7rem
        height 1.7rem
        padding .1rem
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
          font-size .32rem
</style>
