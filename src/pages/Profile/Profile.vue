<template>
    <div class="wrapper">
      <div class="header">
        <div class="item_1">
          <a href="#" class="icon_home" ></a>
        </div>
          <a href="#" class="icon-logo"></a>
        <div class="item_3">
          <div>
            <a href="#" class="icon-search"></a>
          </div>
          <div>
            <a href="#" class="icon-cart"></a>
          </div>
        </div>

      </div>
      <div class="content">
        <div class="cont">
          <div class="loginWrap">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" style="width: 3.57333rem;height: 1.2rem;">
          </div>
          <div class="btnWrap">
            <div class="button_01">
              <i></i>
              <p>手机号码登录</p>
            </div>
            <div class="button_02">
              <i></i>
              <p>邮箱账号登录</p>
            </div>
            <div class="quickRegister"><span>手机号快速注册></span></div>
          </div>
        </div>
        <div class="loginWrap">
          <div class="itemWrap i_1">
            <i></i>
            <span>微信</span>
          </div>
          <div class="itemWrap i_2">
            <i></i>
            <span>QQ</span>
          </div>
          <div class="itemWrap i_3">
            <i></i>
            <span>微博</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped lang="stylus">
  .wrapper
    width 100%
    height 100%
    .header
      padding: 0 .21333rem 0 .32rem;
      display flex
      position relative
      justify-content space-between
      height 1.17333rem;
      align-items center
      .item_1
        .icon_home
          display block
          width: .64rem;
          vertical-align: middle;
          height: .58667rem;
          background-position: 0 -.98667rem;
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png")
          background-size: 2.29333rem 5.6rem;
      .icon-logo
        display inline-block
        width: 2.29333rem;
        height: .72rem;
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        margin auto
        background-position: 0 -1.70667rem;
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png")
        background-size: 2.29333rem 5.6rem;
      .item_3
        display flex
        .icon-search
          display inline-block
          width: .85333rem;
          height: .85333rem;
          margin-right: .26667rem;
          background-position: 0 -4.74667rem;
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png")
          background-size: 2.29333rem 5.6rem;
        .icon-cart
          display inline-block
          width: .85333rem;
          height: .85333rem;
          background-position: 0 0;
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png")
          background-size: 2.29333rem 5.6rem;
    .content
      text-align center
      .cont
        .loginWrap
          text-align: center;
          padding-top: 2.13333rem;
          padding-bottom: 2.13333rem;
        .btnWrap
          padding: 0 .53333rem;
          .button_01
            position: relative
            width 100%
            background-color #b4282d;
            font-size: .37333rem;
            height: 1.25333rem;
            line-height: 1.25333rem;
            margin-bottom .5rem
            color: #fff
            i
              position: absolute
              left 2.5rem
              top .35rem
              display: inline-block;
              vertical-align: middle;
              background-image: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png");
              background-repeat: no-repeat;
              background-position: 0 -.66667rem;
              background-size: .53333rem 3.86667rem;
              width: .53333rem;
              height: .53333rem;
          .button_02
            width 100%
            position: relative
            background-color #fff
            font-size: .37333rem;
            height: 1.25333rem;
            line-height: 1.25333rem;
            border 1px solid #b4282d;
            color #b4282d;
            i
              position: absolute
              left 2.5rem
              top .35rem
              display: inline-block;
              vertical-align: middle;
              background-image: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png");
              background-repeat: no-repeat;
              background-size: .53333rem 3.86667rem;
              width: .53333rem;
              height: .53333rem;


          .quickRegister
            color: #333;
            margin-top .5rem
            font-size: .37333rem;

    .loginWrap
      margin-top 3rem
      height .53333rem;
      .itemWrap
        height 100%
        display inline-block
        border-right 1px solid #979797;
        line-height .53333rem;
        i
          float left
          display block
          width: .53333rem;
          height: .53333rem;
          background-size: 98%;
        span
          margin-left .1rem
          margin-right 0.3rem
          color #ccc
          float left
          display block
          font-size: .37333rem;
      .i_1
        i
          background-image url("./img/weixin.png")
          background-repeat no-repeat
          background-size 100% 100%
      .i_2
        i
          background-image url("./img/qq.png")
      .i_3
        i
          background-image url("./img/sina.png")
</style>
