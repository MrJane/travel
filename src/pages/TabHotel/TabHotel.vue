<template>
  <div class="tab-hotel">
    <div class="title">
      <img src="https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png" alt="">
    </div>
    <div class="main-content">
      <ul class="qt-wrap">
        <li class="qt-item qt-bg-red">
          <div class="col-main">
            <router-link class="link-box" :to="{name:'tabhotel'}">
              <p>酒店</p>
              <img src="http://s.qunarzz.com/touch_home/imgs/hotel.png" alt="">
            </router-link>
          </div>
          <div class="col-grid">
            <div class="col-grid-item">
              <router-link :to="{name:'tabhotel'}" class="link-box qt-bb-x1">特惠酒店</router-link>
              <router-link :to="{name:'tabhotel'}" class="link-box">特惠酒店</router-link>
            </div>
            <div class="col-grid-item">
              <router-link :to="{name:'tabhotel'}" class="link-box qt-bb-x1">特惠酒店</router-link>
              <router-link :to="{name:'tabhotel'}" class="link-box">特惠酒店</router-link>
            </div>
          </div>
        </li>
        <li class="qt-item qt-bg-blue">
          <div class="col-main">
            <router-link class="link-box" :to="{name:'tabhotel'}">
              <p>酒店</p>
              <img src="http://s.qunarzz.com/touch_home/imgs/flight.png" alt="">
            </router-link>
          </div>
          <div class="col-grid">
            <div class="col-grid-item">
              <router-link :to="{name:'tabhotel'}" class="link-box qt-bb-x1">特惠酒店</router-link>
              <router-link :to="{name:'tabhotel'}" class="link-box">特惠酒店</router-link>
            </div>
            <div class="col-grid-item">
              <router-link :to="{name:'tabhotel'}" class="link-box qt-bb-x1">特惠酒店</router-link>
              <router-link :to="{name:'tabhotel'}" class="link-box">特惠酒店</router-link>
            </div>
          </div>
        </li>
        <li class="qt-item qt-bg-green">
          <div class="col-main">
            <router-link class="link-box" :to="{name:'tabhotel'}">
              <p>酒店</p>
              <img src="http://s.qunarzz.com/touch_home/imgs/holiday.png" alt="">
            </router-link>
          </div>
          <div class="col-grid">
            <div class="col-grid-item">
              <router-link :to="{name:'tabhotel'}" class="link-box qt-bb-x1">特惠酒店</router-link>
              <router-link :to="{name:'tabhotel'}" class="link-box">特惠酒店</router-link>
            </div>
            <div class="col-grid-item">
              <router-link :to="{name:'tabhotel'}" class="link-box qt-bb-x1">特惠酒店</router-link>
              <router-link :to="{name:'tabhotel'}" class="link-box">特惠酒店</router-link>
            </div>
          </div>
        </li>
        <li class="qt-item qt-bg-orange">
          <div class="col-grid-item">
            <router-link :to="{name:'tabhotel'}" class="link-box">特惠酒店</router-link>
          </div>
          <div class="col-grid-item">
            <router-link :to="{name:'tabhotel'}" class="link-box">特惠酒店</router-link>
          </div>
          <div class="col-grid-item">
            <router-link :to="{name:'tabhotel'}" class="link-box">特惠酒店</router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="sub-content">
      <div class="wrap">
        <div class="item">
          <router-link :to="{name:'home'}">签证-WIFI</router-link>
        </div>
        <div class="item">
          <router-link :to="{name:'home'}">签证-WIFI</router-link>
        </div>
        <div class="item">
          <router-link :to="{name:'home'}">签证-WIFI</router-link>
        </div>
        <div class="item">
          <router-link :to="{name:'home'}">签证-WIFI</router-link>
        </div>
      </div>
      <div class="wrap">
        <div class="item">
          <router-link :to="{name:'home'}">签证-WIFI</router-link>
        </div>
        <div class="item">
          <router-link :to="{name:'home'}">签证-WIFI</router-link>
        </div>
        <div class="item">
          <router-link :to="{name:'home'}">签证-WIFI</router-link>
        </div>
        <div class="item">
          <router-link :to="{name:'home'}">签证-WIFI</router-link>
        </div>
      </div>
    </div>
    <footer class="footer-wrap">
      <ul class="footer-guide">
        <li class="col4">
          <router-link :to="{name:'home'}">
            <i></i>
            <p>下载APP</p>
          </router-link>
        </li>
        <li class="col4">
          <router-link :to="{name:'home'}">
            <i></i>
            <p>下载APP</p>
          </router-link>
        </li>
        <li class="col4">
          <router-link :to="{name:'home'}">
            <i></i>
            <p>下载APP</p>
          </router-link>
        </li>
      </ul>
      <div class="footer-bot">
        <div class="qt-left">
          <router-link :to="{name:'home'}">Qunar 京ICP备05021087</router-link>
        </div>
        <div class="qt-right">
          <router-link :to="{name:'home'}">意见反馈</router-link>
        </div>
        <div class="qt-right">
          <router-link :to="{name:'home'}">关于我们</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'TabHotel'
  };
</script>

<style lang="stylus" scoped>
  .tab-hotel
    width 100%
    .title
      img
        width 100%
    .main-content
      padding 0.08rem
      .qt-bg-orange
        background #f90
        .col-grid-item
          width 33.3333%
          text-align center
          .link-box
            font-size 0.32rem
            color #fff
      .qt-bg-green
        background #7cb832
      .qt-bg-red
        background #f55
      .qt-bg-blue
        background #00a7f7
      .qt-item
        display flex
        line-height 0.96rem
        border-bottom: 4px solid #fff;
        .qt-grid-3
          width 100%
        .col-main
          width 33.3333%
          .link-box
            text-align center
            font-size 0.32rem
            color #fff
            img
              display block
              margin 0 auto
              width 42px
              height 48px
        .col-grid
          width 66.66667%
          display flex
          .col-grid-item
            width 50%
            .qt-bb-x1
              box-sizing border-box
              border-bottom 1px solid #d4d4d4
            .link-box
              display block
              height 0.96rem
              line-height 0.96rem
              text-align center
              font-size 0.32rem
              color #fff
    .sub-content
      padding-top 0.2rem
      background #eee
      .wrap
        background #fff
        padding 0 .4rem
        display flex
        .item
          width 25%
    .footer-wrap
      padding-top 0.2rem
      background #eee
      .footer-bot
        display flex
        height 1.08rem
        line-height 1.08rem
        align-items center
        background #eee
        .qt-left
          flex 1
          padding 0 .2rem
        .qt-right
          width 25%
          text-align left
      .footer-guide
        background #fff
        display flex
        padding 0 .4rem
        .col4
          display flex
          width 33.3333%
          height 1.64rem
          text-align center
          justify-content: center;
          align-items: center;
          p
            line-height .4rem
          i
            display block
            margin 0 auto
            width 0.8rem
            line-height .8rem
            height .8rem
            font-size .56rem
            border 1px solid #dedede
            border-radius .4rem
            text-align center
            color #666
            background-color #fcfcfc
</style>
