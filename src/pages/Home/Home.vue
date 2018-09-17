<template>
  <div class="home">
    <v-header></v-header>
    <v-swiper></v-swiper>
    <v-icons></v-icons>
  </div>
</template>

<script>
  import Header from './components/Header';
  import Swiper from './components/Swiper';
  import Icons from './components/Icons';

  export default {
    name: 'Home',
    components: {
      'v-header': Header,
      'v-swiper': Swiper,
      'v-icons': Icons
    }
  }
  ;
</script>

<style scoped>

</style>
