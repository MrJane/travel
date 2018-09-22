<template>
  <div class="container" @click="handleGallary">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img class="swiper-img"
               src="http://img1.qunarzz.com/sight/p0/1601/19/1993fb00037a3ffd90.water.jpg_r_800x800_1c5f4cbd.jpg"
               alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img"
               src="http://img1.qunarzz.com/sight/p0/1601/19/1993fb00037a3ffd90.water.jpg_r_800x800_1c5f4cbd.jpg"
               alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Gallary',
    props: ['imgs'],
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true, // observeParents observer只要监听本身元素或父级元素DOM结构发生变化自动刷新
          observer: true,
          loop: true// 这个属性让轮播图能够循环拖动
        }
      };
    },
    methods: {
      handleGallary () {
        this.$emit('close');
        // 事件传给父元素 告知关闭
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit

  /*这个要设置inherit  不然轮播索引不显示*/
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    background #000
    z-index 10
    .wrapper
      width 100%
      /*overflow hidden 这个要去掉 不然轮播索引不显示*/
      height 0
      padding-bottom 100%
      .swiper-pagination
        color #fff
        bottom -1rem
      .swiper-img
        width 100%
</style>
