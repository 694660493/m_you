<template>
  <div id="app">
    <!--路由渲染的出口-->
    <router-view></router-view>
    <MainFooter></MainFooter>
  </div>

</template>

<script>
    import  MainFooter from "./components/MainFooter/MainFooter.vue"
    export default {
        name: "App",
        components: {
          MainFooter,
        }
    }
</script>

<style scoped>

</style>
