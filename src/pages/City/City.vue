<template>
  <div>
    <v-cityheader></v-cityheader>
    <v-search></v-search>
    <v-list :cities="cities" :hotCites="hotCities"></v-list>
    <v-alphat :cities="cities"></v-alphat>
  </div>
</template>

<script>
  import CityHeader from './CityHeader';
  import CitySearch from './CitySearch';
  import CityList from './List';
  import Alphat from '../../common/Alphat/Alphat';

  export default {
    name: 'City',
    data () {
      return {
        cities: {},
        hotCities: []
      };
    },
    components: {
      'v-cityheader': CityHeader,
      'v-search': CitySearch,
      'v-list': CityList,
      'v-alphat': Alphat
    },
    methods: {
      getCitInfo () {
        this.$ajax.get('/travel/cities').then((res) => {
          this.hotCities = res.data.data.hotCities;
          this.cities = res.data.data.cities;
        });
      }
    },
    mounted () {
      this.getCitInfo();
    }
  };
</script>

<style lang="stylus" scoped>
  .city
    width 100%
</style>
