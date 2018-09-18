<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="img-wrapper">
            <img :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.text}}</p>
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
    name: 'Icons',
    data () {
      return {
        iconList: [
          {id: '001', text: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
          {id: '002', text: '广州必游', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'},
          {id: '003', text: '动植物园', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'},
          {id: '004', text: '游乐场', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'},
          {id: '005', text: '两江夜游', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png'},
          {id: '006', text: '水上乐园', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'},
          {id: '007', text: '一日游', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'},
          {id: '008', text: '网红套餐', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/8d/747c9a29b8dba402.png'},
          {id: '009', text: '玩转长隆', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png'},
          {id: '009', text: '全部玩乐', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png'}
        ]
      };
    },
    computed: {
      pages () {
        const pages = [];
        this.iconList.forEach((item, index) => {
          // 用索引index除以8向下取整表示这个应该是展示在哪一页上
          const page = Math.floor(index / 8);
          // 判断加入pages下的page不存在，就pages[page]变为一个空数组
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
          // 经过上面处理用iconList把pages变成一个二维数组,这个算法是技巧 需掌握
        });
        return pages;
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .icons >>> .swiper-container
    width 100%
    height 0
    padding-bottom 50%

  /*这个百分比相对自己的宽度 因为没有父元素*/
  .icons
    margin-top .1rem
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
