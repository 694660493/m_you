<template>
  <div>
    <p>页面跑到月球去了</p>
    <router-link to="/">返回首页</router-link>
  </div>

</template>

<script>
    export default {
        name: "notfount"
    }
</script>

<style scoped lang="stylus">
    div
      position relative
      font-size 1rem
      p
        color: lime
      a
        position absolute
        top 2rem
        border 1px solid black
        border-radius 10px

</style>
