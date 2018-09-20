<template>
  <div class="wrapper">
    <div class="my-info-wrapper">
      <div class="info-header">
        <div class="header-left">
          <i class="iconfont back-icon">&#xe624;</i>
        </div>
      </div>
      <img src="https://s.qunarzz.com/usercenter_mobile/images/my/mybgnew-20161111.jpg" alt="">
      <div class="my-info-content">
        <div class="avatar">
          <a href="" class="avatar-img">
            <img src="https://source.qunarzz.com/usercenter/touch/avatar.png" alt="">
          </a>
          <a class="unlogin-btn" href="">登录/注册</a>
        </div>
        <div></div>
      </div>
    </div>
    <div class="yo-list my-wallet">
      <div class="wallet">
        <span class="wallet-icon"></span>
        <span>我的钱包</span>
      </div>
      <div class="my-money">
        <a href="" class="flex">
          <label class="my-balance">00.00</label>
          <label class="my-tip">账户余额</label>
        </a>
        <a href="" class="flex">
          <label class="my-balance">0</label>
          <label class="my-tip">星券</label>
        </a>
        <a href="" class="flex">
          <label class="my-balance"><em>0</em><em class="my-unit">张</em></label>
          <label class="my-tip">银行卡</label>
        </a>
      </div>
    </div>
    <div class="yo-list">
      <div class="my-finace">
        <a class="flex finace-item">
          <span class="my-quota-tip">
            <label>拿去花</label>
            <label>查看额度</label>
          </span>
          <div></div>
        </a>
        <a class="flex finace-item">
          <span class="my-quota-tip">
            <label>拿去花</label>
            <label>查看额度</label>
          </span>
          <div></div>
        </a>
      </div>
    </div>
    <div class="yo-list my-order">
      <a href="" class="order-item">
        <span class="order-icon"></span>
        <span class="desc">我的订单</span>
        <i class="yo-icon">></i>
      </a>
      <a href="" class="order-item">
        <span class="order-icon"></span>
        <span class="desc">我的订单</span>
        <i class="yo-icon">></i>
      </a>
      <a href="" class="order-item">
        <span class="order-icon"></span>
        <span class="desc">我的订单</span>
        <i class="yo-icon">></i>
      </a>
      <a href="" class="order-item">
        <span class="order-icon"></span>
        <span class="desc">我的订单</span>
        <i class="yo-icon">></i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyAccount'
  };
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .wrapper
    background #eee

  .my-info-wrapper
    position relative
    overflow hidden
    height 3.2rem
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
    .my-info-content
      position absolute
      left 0
      bottom .2rem
      width 100%
      .avatar
        height 2rem
        text-align center
        width 100%
        margin 0 auto
        .avatar-img
          display inline-block
          height 1.42rem
          width 1.42rem
          border-radius 100%
          padding .06rem
          box-sizing border-box
          background rgba(255, 255, 255, 0.5)
          img
            width 1.3rem
            height 1.3rem
            border-radius 100%
        .unlogin-btn
          display block
          color #fff
    & > img
      width 100%
      height 12.8rem
      margin-top -9.6rem

  .yo-list
    margin-top .2rem
    background #fff

  .my-wallet
    width 100%
    .wallet
      display flex
      align-items center
      width 100%
      height .9rem
      line-height .9rem
      padding 0 .24rem
      font-size .32rem
      box-sizing border-box
      border-bottom 1px solid #eee
      .wallet-icon
        display inline-block
        width .58rem
        height .58rem
        border-radius 40%
        border 1px solid #fff
        box-sizing border-box
        background #ff7043
        margin-right .24rem
    .my-money
      display flex
      padding 0 .24rem
      height 1.6rem
      align-items center
      .flex
        display block
        width 33.3333%
        text-align center
        color #4d4d4d
        line-height .48rem
        .my-balance
          display block
          text-align center
          & > .my-unit
            display inline-block
            vertical-align top
            font-size .24rem
            transform scale(0.7)
        .my-tip
          display block
          font-size .24rem
          color #888
          margin-top .1rem
          line-height .32rem

  .my-finace
    display flex
    align-items center
    width 100%
    height 1.4rem
    padding 0 .24rem
    font-size .32rem
    box-sizing border-box
    .flex
      width 50%
      display flex
      color #4d4d4d
      .my-quota-tip
        flex 1
        label
          display block

  .my-order
    padding 0 .24rem
    font-size .32rem
    box-sizing border-box
    .order-item
      display flex
      height .9rem
      align-items center
      color #4d4d4d
      .order-icon
        display inline-block
        width .58rem
        height .58rem
        border-radius 40%
        border 1px solid #fff
        box-sizing border-box
        background #ff7043
        margin-right .24rem
      .desc
        flex 1
      .yo-icon
        color #c7c7cc
        font-size .32rem
</style>
