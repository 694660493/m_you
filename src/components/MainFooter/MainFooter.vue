<template>
    <footer class="footer_guide border-1px">
      <a href="javascript:;" class="guide_item" @click="goTo(`/msite`)" :class="{on:isEvent(`/msite`)}">
        <span class="item_icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
        </span>
        <span>首页</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goTo(`/category`)" :class="{on:isEvent(`/category`)}">
        <span class="item_icon">
          <svg class="icon" aria-hidden="true" >
            <use xlink:href="#icon-aiguizi"></use>
          </svg>
        </span>
        <span>分类</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goTo(`/distinguish`)" :class="{on:isEvent(`/distinguish`)}">
        <span class="item_icon">
          <svg class="icon" aria-hidden="true"  >
            <use xlink:href="#icon-xiangkuang"></use>
          </svg>
        </span>
        <span>识物</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goTo(`/cart`)" :class="{on:isEvent(`/cart`)}">
        <span class="item_icon">
          <svg class="icon" aria-hidden="true" >
            <use xlink:href="#icon-gouwuche"></use>
          </svg>
        </span>
        <span>购物车</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goTo(`/profile`)" :class="{on:isEvent(`/profile`)}">
        <span class="item_icon">
          <svg class="icon" aria-hidden="true" >
            <use xlink:href="#icon-gerenyonghutouxiang"></use>
          </svg>
        </span>
        <span>个人</span>
      </a>
    </footer>
</template>

<script>
    export default {
        name: "MainFooter",
        methods:{
          goTo(url) {
            this.$router.replace(url)
          },
          isEvent(path) {
            return this.$route.path === path
          }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 0.985rem
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color red
      span
        font-size 0.24rem
        margin-top 0.02rem
        margin-bottom 0.02rem
        .iconfont
          width 0.74rem
          height 0.74rem
</style>

