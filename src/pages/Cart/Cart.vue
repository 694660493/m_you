<template>
    <div class="wrapper">
      <div class="header">
        <span>购物车</span>
        <a href="#">领券</a>
      </div>
      <div class="list">
        <ul>
          <li>
            30天无忧退款
          </li>
          <li>
            48小时快速退款
          </li>
          <li>
            满88免邮费
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="img">
        </div>
        <div class="text">
          <span style="font-size: .37333rem;">去添加点什么把</span>
          <div class="btn" style="font-size: .4rem;" @click="$router.replace('/login')">登录</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Cart"
    }
</script>

<style scoped lang="stylus">
  .wrapper
    position: relative
    width 100%
    height 100%
    .header
      position relative
      height 1.17333rem
      line-height 1.17333rem
      align-items: center;
      text-align center
      /*border-bottom 1px black solid*/
      span
        display block
        height 100%
        font-size .48rem
      a
        font-size: .4rem;
        color red
        position absolute
        top 0
        right .7rem

    .list
      background-color #f4f4f4
      height .93333rem;
      line-height .93333rem;
      ul
        display flex
        justify-content space-around
        li
          font-size: .32rem;
    .container
      background-color #f4f4f4
      position absolute
      padding-top 5rem
      height 20rem
      width 100%
      .img
        margin 0 auto
        width: 3.30667rem;
        height: 3.30667rem;
        background url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png") no-repeat
        background-size 100% 100%
      .text
        span
          margin-top -0.3rem
          margin-bottom 0.5rem
          display block
          width 100%
          text-align center
          color #ccc
        .btn
          width: 6.4rem;
          height: 1.22667rem;
          line-height 1.22667rem;
          color #fff
          background-color #b4282d;
          text-align center
          margin 0 auto
</style>
