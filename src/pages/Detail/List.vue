<template>
  <div>
    <div class="item" v-for="item in list">
      <div class="item-title">
        <span></span>
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'List', // name的用处 在做递归组件时可以直接使用这个名字
    props: ['list']
  };
</script>

<style scoped>

</style>
