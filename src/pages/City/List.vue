<template>
  <div class="list">
    <div class="area">
      <h1 class="title border-1px">当前城市</h1>
      <div class="button-list">
        <div class="wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <h1 class="title border-1px">热门城市</h1>
      <div class="button-list">
        <div class="wrapper">
          <div class="button">北京</div>
        </div>
        <div class="wrapper">
          <div class="button">北京</div>
        </div>
        <div class="wrapper">
          <div class="button">北京</div>
        </div>
        <div class="wrapper">
          <div class="button">北京</div>
        </div>
        <div class="wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
    <h1 class="title border-1px">B</h1>
    <ul class="item-list">
      <li class="item border-1px">阿拉尔</li>
      <li class="item border-1px">阿拉尔</li>
      <li class="item border-1px">阿拉尔</li>
      <li class="item border-1px">阿拉尔</li>
      <li class="item border-1px">阿拉尔</li>
      <li class="item border-1px">阿拉尔</li>
      <li class="item border-1px">阿拉尔</li>
      <li class="item border-1px">阿拉尔</li>
      <li class="item border-1px">阿拉尔</li>
      <li class="item border-1px">阿拉尔</li>
      <li class="item border-1px">阿拉尔</li>
      <li class="item border-1px">阿拉尔</li>
    </ul>
  </div>
    <div class="area">
      <h1 class="title border-1px">A</h1>
      <ul class="item-list">
        <li class="item border-1px">阿拉尔</li>
        <li class="item border-1px">阿拉尔</li>
        <li class="item border-1px">阿拉尔</li>
        <li class="item border-1px">阿拉尔</li>
        <li class="item border-1px">阿拉尔</li>
        <li class="item border-1px">阿拉尔</li>
        <li class="item border-1px">阿拉尔</li>
        <li class="item border-1px">阿拉尔</li>
        <li class="item border-1px">阿拉尔</li>
        <li class="item border-1px">阿拉尔</li>
        <li class="item border-1px">阿拉尔</li>
        <li class="item border-1px">阿拉尔</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CityList'
  };
</script>

<style lang="stylus" scoped>
  .border-1px
    &:after
      border-color #ccc
    &:before
      border-color red

  .list
    .area
      .title
        font-size .24rem
        padding .24rem .3rem
        color #212121
        background #f5f5f5
      .button-list
        padding .1rem 0.6rem 0.1rem 0.1rem
        /*这里留出.6rem 为了是左边的abcd...导航预留位置*/
        overflow hidden
        padding-left .24rem
        .wrapper
          width 33.3333%
          float left
          .button
            color red
            padding .1rem
            margin .1rem
            text-align center
            border .02rem solid green
            border-radius 0.06rem
      .item-list
        padding-left .3rem
        line-height .66rem
</style>
