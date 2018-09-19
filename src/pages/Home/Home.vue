<template>
  <div class="home">
    <v-header></v-header>
    <v-swiper></v-swiper>
    <v-icons></v-icons>
    <v-recommend></v-recommend>
    <v-weekend></v-weekend>
  </div>
</template>

<script>
  import Header from './components/Header';
  import Swiper from './components/Swiper';
  import Icons from './components/Icons';
  import Recommend from './components/Recommend';
  import Weekend from './components/Weekend';

  export default {
    name: 'Home',
    components: {
      'v-header': Header,
      'v-swiper': Swiper,
      'v-icons': Icons,
      'v-recommend': Recommend,
      'v-weekend': Weekend
    }
  }
  ;
</script>

<style scoped>

</style>
