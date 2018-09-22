<template>
  <div>
    <v-banner></v-banner>
    <v-header></v-header>
    <v-list :list="list"></v-list>
  </div>
</template>

<script>
  import DetailBanner from './Banner';
  import DetailHeader from './Header';
  import DetailList from './List';

  export default {
    name: 'Detail',
    components: {
      'v-banner': DetailBanner,
      'v-header': DetailHeader,
      'v-list': DetailList
    },
    data () {
      return {list: [{title: '成人票'},{title: '学生票'},{title: '儿童票'}]};
    }
  };
</script>

<style scoped>

</style>
