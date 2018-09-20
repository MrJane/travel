<template>
  <ul class="alphabet">
    <li class="item" v-for="(city,key) in cities" :key="key" @click="handleLetter">{{key}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'Alphat',
    props: ['cities'],
    methods: {
      handleLetter (e) {
        // e是事件对象，我们获取点击事件对象的文本然后传递到城市列表兄弟组件,首先传递相同父组件，再由父组件传递兄弟组件
        console.log(e.target.innerText);
        this.$emit('change', e.target.innerText);
      }
    }
  };
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .alphabet
    display flex
    flex-direction column
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
