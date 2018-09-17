<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <!--我们不单独显示进行循环，建立swiperList变量-->
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img class="swiper-img" :src="item.url" alt="">
      </swiper-slide>
      <!--<swiper-slide>-->
      <!--<img class="swiper-img" src="http://img1.qunarzz.com/des-mis/ad/1704/85/e817a31674a37f.jpg" alt="">-->
      <!--</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 3</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 4</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 5</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 6</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 7</swiper-slide>-->
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--button-prev button-next是控制左右两个箭头-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
      <!--scrollbar控制滚动条-->
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    // /*取名Swiper 会拨错 Maximum call stack size exceeded 原因不知道 改名就行*/
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true// 这个属性让轮播图能够循环拖动
        },
        swiperList: [
          {
            id: 0,
            url: 'http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg'
          },
          {
            id: 1,
            url: 'http://img1.qunarzz.com/piao/fusion/1801/bd/04554e7c67650302.jpg_750x200_4293d60a.jpg'
          },
          {
            id: 2,
            url: 'http://img1.qunarzz.com/piao/fusion/1809/6a/847ac7b98f10e202.jpg_750x200_f0593cb5.jpg'
          },
          {
            id: 3,
            url: 'http://img1.qunarzz.com/piao/fusion/1809/50/670c61165170f902.jpg_750x200_c4b8d1dc.jpg'
          },
          {
            id: 4,
            url: 'http://img1.qunarzz.com/piao/fusion/1808/f4/5f2289f8675f0502.jpg_750x200_ab1633c7.jpg'
          },
          {
            id: 5,
            url: 'http://img1.qunarzz.com/piao/fusion/1809/b4/7101381b7b2c0702.jpg_750x200_b8da41bf.jpg'
          },
          {
            id: 6,
            url: 'http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg'
          }
        ]
      };
    }
  };
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff !important

  /*三个箭头表示样式进行穿透 只要.wrapper子组件出现。swiper-pagination-bullet-active 都显示白色 就不受scoped限制了*/
  .wrapper
    width 100%
    overflow hidden
    height 0
    padding-bottom 26.66666%
    background #77754d
    /*.swiper-pagination-bullet-active*/
    /*background #fff !important  由于默认原点是蓝色我们想改变其颜色 这样写不会生效 因为样式scoped只修饰当前组件
    *实际上swiper-pagination显示的内容是传递swiper组件的，所以swiper组件显示的原点并不是这个当前组件显示的 即样式不会生效
    *要向顶上那样写
    */
    .swiper-img
      width 100%
</style>
