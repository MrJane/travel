<template>
  <ul class="alphabet">
    <li class="item" v-for="(city,key) in cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'Alphat',
    props:['cities']
  };
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .alphabet
    display flex
    flex-direction  column
    justify-content center
    position fixed
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
