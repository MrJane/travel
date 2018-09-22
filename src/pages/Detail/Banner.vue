<template>
  <div>
    <div @click="handelShowGallary" class="banner">
      <img class="banner-img"
           src="http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_600x330_18d5b736.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">锦绣中华民俗村(AAAAA景区)</div>
        <div class="banner-count">
          <span></span>
          <em>30</em>
        </div>

      </div>
    </div>
    <v-gallary v-show="showGallary" @close="handleCloseGallary"></v-gallary>
  </div>
</template>

<script>
  import Gallary from '../common/Gallary';

  export default {
    name: 'Banner',
    data () {
      return {
        showGallary: false
      };
    },
    components: {
      'v-gallary': Gallary
    },
    methods: {
      handelShowGallary () {
        this.showGallary = true;
        // 这个点击事件显示Gallary滑动的时候会有问题，因为swiper宽度出问题，要在子组件swiperOption多配两个属性observeParents,observer
      },
      handleCloseGallary () {
        this.showGallary = false;
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    color #fff
    .banner-img
      width 100%
    .banner-info
      position absolute
      display flex
      line-height .6rem
      bottom 0
      left 0
      right 0
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-count
        padding 0 .3rem
        height .32rem
        line-height .32rem
        border-radius .2rem
        font-size .24rem
        margin-top .14rem
        background rgba(0, 0, 0, .8)
</style>
