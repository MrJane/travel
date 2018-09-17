<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="icon">
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
          </div>
          <p class="icon-desc">景点门票</p>
        </div>
      </swiper-slide>
    </swiper>
    <!--<div class="icon">-->
    <!--<div class="img-wrapper">-->
    <!--<img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">-->
    <!--</div>-->
    <!--<p class="icon-desc">景点门票</p>-->
    <!--</div>-->
  </div>
  <!--图标轮播也可以引用swiper组件包裹，但是有问题swiper-container高度不等于icons高度话滑动的时候只有在swiper-container上才有效果
   所以下面样式需要变化 不能把icons宽度设置100% 要设置.icons >>> .swiper-container 宽度100%
   -->
</template>

<script>
  export default {
    name: 'Icons'
  };
</script>

<style lang="stylus" scoped>
  .icons >>> .swiper-container
    width 100%
    height 0
    padding-bottom 50%
    /*这个百分比相对自己的宽度 因为没有父元素*/
  .icon
    overflow hidden
    position relative
    float left
    width 25%
    height 0
    padding-bottom 25%
    /*这个百分比相对父元素*/
    .icon-desc
      position absolute
      bottom 0
      height .44rem
      text-align center
      line-height .44rem
      color #333
      right 0
      left 0
    /*文字居中 为什么 text-align center 要配合 left right 使用？？*/
    .img-wrapper
      position absolute
      top 0
      right 0
      left 0
      bottom .44rem
      padding .1rem
      box-sizing border-box
      img
        height 100%
        display block
        margin 0 auto
</style>
