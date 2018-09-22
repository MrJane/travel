<template>
  <div>
    <router-link to="/" class="header-abs" tag="div" v-show="showHeader">
      <i class="iconfont back-icon">&#xe624;</i>
    </router-link>
    <router-link to="/" tag="div" class="header-fixed" v-show="!showHeader" :style="opacityStyle">
      <i class="iconfont back-icon">&#xe624;</i>
      景秀中华民俗村
    </router-link>
    <p></p>
  </div>
  <!--header渐隐渐现效果：做两个header一个绝对定位一个固定地位(默认隐藏)-->
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        showHeader: true,
        opacityStyle: {
          opacity: 0
        }
      };
    },
    methods: {
      handleScroll () {
        const top = document.documentElement.scrollTop;
        console.log(top); // 这个必须在App router-view外包裹keep-alive 才生效  需要学习
        if (top > 60) { // if (top > 60 && top < 160)我们在60-160区间做渐隐渐现效果，但是超过160就会有问题，所以不现限定区间
          let opacity = top / 160;
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityStyle = {opacity};
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    },
    activated () {
      window.addEventListener('scroll', this.handleScroll);
      // 全局事件解绑：假如跳到首页时候这个滚动事件依然存在，但我们并不想在首页建监听滚动事件，所以要移除
    },
    deactivated () {
    // deactivated这个钩子函数表示组件隐藏时执行
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .header-abs
    position absolute
    top .2rem
    left .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    background rgba(0, 0, 0, .5)
    line-height .8rem
    text-align center
    color #fff

  .header-fixed
    position fixed
    left 0
    right 0
    top 0
    height $headerHeight
    width 100%
    background-color $bgColor
    z-index 100
    line-height $headerHeight
    text-align center
    font-size .32rem
    color #fff
</style>
