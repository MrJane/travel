<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style lang="stylus" scoped>
  .app
    height: 86px
    width: 43px
    background: white
</style>
