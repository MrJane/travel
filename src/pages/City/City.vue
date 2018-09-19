<template>
  <div>
    <v-cityheader></v-cityheader>
    <v-search></v-search>
    <v-list></v-list>
  </div>
</template>

<script>
  import CityHeader from './CityHeader';
  import CitySearch from './CitySearch';
  import CityList from './List';

  export default {
    name: 'City',
    components: {
      'v-cityheader': CityHeader,
      'v-search': CitySearch,
      'v-list': CityList
    }
  };
</script>

<style lang="stylus" scoped>
  .city
    width 100%
</style>
