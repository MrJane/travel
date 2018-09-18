<template>
  <div class="home">
    <v-header></v-header>
    <v-swiper></v-swiper>
    <v-icons></v-icons>
    <v-recommend></v-recommend>
  </div>
</template>

<script>
  import Header from './components/Header';
  import Swiper from './components/Swiper';
  import Icons from './components/Icons';
  import Recommend from './components/Recommend'

  export default {
    name: 'Home',
    components: {
      'v-header': Header,
      'v-swiper': Swiper,
      'v-icons': Icons,
      'v-recommend': Recommend
    }
  }
  ;
</script>

<style scoped>

</style>
