<template>
  <div id="app" v-if="shiwuData[0]">
    <div class="m-hwrapper">
      <header class="psc-g-hd J_psc_g_hd">
        <div class="psc-m-topbar">
          <div class="psc-row">
            <div class="psc-m-hamburger">
              <a href="#/msite" class="psc-u-nav-link">
                <i class="psc-icon psc-icon-house">
                  <svg class="icon" aria-hidden="true" style="position: absolute; top: 0.25rem;left: 0;">
                    <use xlink:href="#icon-shouye"></use>
                  </svg>
                </i>
              </a>
            </div>
            <div class="m-head-tab">
              <a href="/topic/index" class="item_0">发现</a>
              <a href="/expert/index" class="item_1">甄选家</a>
            </div>
            <div class="psc-m-right">
              <a href="#/search">
                <i class="psc-icon psc-icon-cart">
                  <svg class="icon" aria-hidden="true" style="position: absolute; top: 0.25rem;right: 1rem;">
                    <use xlink:href="#icon-fangdajing"></use>
                  </svg>
                </i>
              </a>
              <a href="#/cart" class="psc-u-nav-link psc-u-link-search">
                <i class="psc-icon psc-icon-search">
                  <svg class="icon" aria-hidden="true" style="position: absolute; top: 0.25rem;right: -0.4rem;">
                    <use xlink:href="#icon-gouwuche"></use>
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
    <!--导航栏-->
    <div class="m-main-tab">
      <ul @click="handleC">
        <li><a href="/#/distinguish?tab=1">推荐</a></li>
        <li><a href="/#/distinguish?tab=2">达人</a></li>
        <li><a href="/#/distinguish?tab=3">上新</a></li>
        <li><a href="/#/distinguish?tab=4">晒单</a></li>
        <li><a href="/#/distinguish?tab=5">HOME</a></li>

      </ul>
    </div>
    <!--三石福利价-->
    <div v-if="shiwuData[0].ad" class="m-tpls-banner">
      <a href="http://you.163.com/topic/v1/pub/kpcDOKN6EH.html">
        <div class="u-pic">
          <img
            src="https://yanxuan.nosdn.127.net/b7db4d98e47a94adda8b4d61bc5f4af0.jpg?imageView&quality=65&thumbnail=690y376"
            width="100%" height="100%">
        </div>
      </a>
    </div>

    <div v-if="shiwuData[0].ad" class="m-tpls-wrapper" v-for="(shiwuItem,index) in getNewArray" :key="index">
      <!--双十一羽绒服 type :1-->
      <div class="m-tpls-picker" v-if="shiwuItem.type==1">
        <a :href="shiwuItem.schemeUrl">
          <div class="info">
            <div class="u-name">
            <span class="ava">
              <img :src="shiwuItem.avatar" alt="" width="100%" height="100%">
            </span>
              <span>{{shiwuItem.nickname}}</span></div>
            <div class="title">{{shiwuItem.title}}</div>
            <div class="desc">{{shiwuItem.subTitle}}</div>
            <div class="u-rcount"><i class="ico"></i><span>{{shiwuItem.readCount}}人看过</span>
            </div>
          </div>
          <div class="u-pic">
            <img
              :src="shiwuItem.picUrl"
              alt="" width="100%" height="100%">
          </div>
        </a>
      </div>
      <!--类目升级大盘点 type :0-->
      <div class="m-tpls-rec" v-if="shiwuItem.type==0">
        <a :href="shiwuItem.schemeUrl">
          <div class="u-name"><span class="ava">
          <img :src="shiwuItem.avatar" alt="" width="100%" height="100%">
          </span><span>{{shiwuItem.nickname}}</span>
          </div>
          <div class="title">{{shiwuItem.title}}</div>
          <div class="u-pic">
            <img :src="shiwuItem.picUrl" alt="" width="100%" height="100%">
          </div>
          <div class="u-rcount">
            <i class="ico"></i>
            <span>{{shiwuItem.readCount}}人看过</span>
          </div>
        </a>
      </div>
    </div>
    <!--第二栏-->
    <div v-if="shiwuData[0].topicId='5542'" v-for="(shiwuItem,index) in shiwuData" :key="index.topicId">
      <div v-if="shiwuItem.type==1 || shiwuItem.type==2" class="m-tpls m-tpls-picker">
        <a :href="shiwuItem.schemeUrl" class="u-flexbox">
          <div class="info">
            <div class="u-name">
              <span class="ava">
                <img :src="shiwuItem.avatar" alt="" width="100%" height="100%">
              </span>
              <span>{{shiwuItem.nickname}}</span>
            </div>
            <div class="title">{{shiwuItem.title}}</div>
            <div class="desc">{{shiwuItem.subTitle}}</div>
            <div class="u-rcount">
              <i class="ico"></i>
              <span>{{shiwuItem.readCount}}人看过</span>
            </div>
          </div>
          <div class="u-pic">
            <img :src="shiwuItem.picUrl" alt="" width="100%" height="100%">
          </div>
        </a>
      </div>

      <div v-if="shiwuItem.type==0" class="m-tpls m-tpls-rec">
          <a :href="shiwuItem.schemeUrl">
          <div class="u-name">
            <span class="ava">
              <img :src="shiwuItem.avatar" alt="" width="100%" height="100%">
            </span>
            <span>{{shiwuItem.nickname}}</span>
          </div>
          <div class="title">{{shiwuItem.title}}</div>
          <div class="u-pic">
            <img :src="shiwuItem.picUrl" alt="" width="100%" height="100%">
          </div>
          <div class="u-rcount">
            <i class="ico"></i>
            <span>{{shiwuItem.readCount}}人看过</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  import {Loadmore} from 'mint-ui';

  Vue.component(Loadmore.name, Loadmore);
  import {mapState} from "vuex"

  export default {
    name: "Distinguish",
    data() {
      return {}
    },
    mounted() {
      this.$nextTick(() => {
        this.$store.dispatch("getShiWu_1");
      })
    },
    watch: {
      fullpath() {
        this.$nextTick(() => {
          let fullPath = this.fullpath
          let tabId = fullPath.substring(fullPath.length - 1, fullPath.length)
          this.$store.dispatch("getShiWu_" + tabId);
        })
      }
    },
    methods: {
      handleC(event) {
        let url = event.target.href
        let fullpath = url.substring(url.length - 18, url.length)
        this.$store.dispatch("setFullPath", {fullpath})
      }
    },
    computed: {
      ...mapState(["shiwuData", "fullpath"]),
      getNewArray() {
        let arr = [];
        this.shiwuData.forEach((shiwuItem, index) => {
          arr = arr.concat(shiwuItem.topics)
        })


        return arr;
      }
    },
    //路由切换前后更改document的font-size值
    beforeRouteLeave(to, from, next) {
      (function (designWidth) {
        var size = document.documentElement.clientWidth / (designWidth / 100);
        document.documentElement.style.fontSize = size + "px";
      })(1000);
      next()
    },
    beforeRouteEnter(to, from, next) {
      (function (designWidth) {
        var size = document.documentElement.clientWidth / (designWidth / 100);
        document.documentElement.style.fontSize = size + "px";
      })(750);
      next()
    }
  }
</script>

<style scoped lang="stylus">
  #app
    background: #f4f4f4;
    .m-hwrapper
      height: 1rem;
      width: 100%;
      position: relative;
      header
        position: fixed !important;
        left: 0;
        top: 0;
        z-index: 99;
        width: 100%;
        .psc-m-topbar
          position: relative;
          height: 1rem;
          background-color: #fafafa;
          box-sizing: border-box;
          border-bottom: .01rem solid #d9d9d9;
          .psc-row
            z-index: 1;
            max-width: 768px;
            box-sizing: border-box;
            margin: auto;
            overflow: hidden;
            padding: 0 .26rem 0 .24rem;
            position: relative;
            .psc-m-hamburger
              display: block;
              float: left;
              .psc-u-nav-link
                display: block;
                height: 1rem;
                text-decoration: none;
                outline: 0;
                i
                  display: block;
                  position: relative;
                  background-position: center;
                  background-repeat: no-repeat;
                  line-height 1rem
                  /*background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMV…ip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII=)*/
                  width: .46rem;
                  height: 1rem;
                  font-style: normal;
            .m-head-tab
              position: absolute;
              width: 3.2rem;
              height: 100%;
              line-height: 1rem;
              text-align: center;
              left: 50%;
              top: 0;
              margin-left: -1.6rem;
              font-size: .28rem;
              color: #7F7F7F;
              z-index: 1;
              .item_0
                font-size: .4rem;
                color: #b4282d;
                font-weight: bold;
                padding: 0 .16rem;
                vertical-align: middle;
                text-decoration: none;
                outline: 0;
              .item_1
                padding: 0 .16rem;
                vertical-align: middle;
                text-decoration: none;
                outline: 0;
            .psc-m-right
              display: block;
              float: right;
              height: 1rem;
              margin-right: .02rem;
              .psc-u-link-cart
                float: right;
                display: block;
                height: 1rem;
                i
                  display: block;
                  position: relative;
                  background-position: center;
                  background-repeat: no-repeat;

                  background-size: .46rem .46rem;
                  width: .49rem;
                  height: 1rem;
              .psc-u-link-search
                float: right;
                margin-right: .3rem;
                display: block;
                height: 1rem;
                i
                  display: block;
                  position: relative;
                  background-position: center;
                  background-repeat: no-repeat;
                  background-size: .46rem .46rem;
                  width: .62rem;
                  height: 1rem;

    .m-main-tab
      ul
        display flex
        justify-content space-around
        flex-items center
        li
          font-size: .28rem;
          height .72rem
          line-height .72rem
          &.active
            a
              color: red

    .m-tpls-banner
      position: relative;
      background-color #fff;
      padding: .36rem .3rem;
      margin: .2rem 0;
    .m-tpls-wrapper
      .m-tpls-picker
        position: relative;
        box-sizing border-box
        width: 100%
        background-color #fff
        padding: .32rem .3rem;
        margin: .2rem 0;
        a
          display: flex;
          flex-wrap: wrap;
          -webkit-box-pack: justify;
          justify-content: space-between;
          .info
            width: 4rem;
            .u-name
              font-size: .28rem;
              color: #333;
              line-height: .36rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              .ava
                width: .56rem;
                height: .56rem;
                overflow: hidden;
                border-radius: 50%;
                box-sizing: border-box;
                border: .01rem solid #d9d9d9;
                margin-right: .12rem;
                display: inline-block;
                vertical-align: middle;
                span
                  display: inline-block;
                  vertical-align: middle;
            .title
              width: 100%;
              font-size: .36rem;
              color: #333;
              line-height: .44rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              padding-top: .32rem;
              font-family: PingFangSC-Regular;
            .desc
              width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: .28rem;
              line-height: .4rem;
              padding-top: .08rem;
              color: #7f7f7f;
            .u-rcount
              position: absolute;
              left: .3rem;
              bottom: .26rem;
              font-size: .22rem;
              color: #999;
              line-height: .32rem;
              margin-top: .18rem;
              .ico
                display: inline-block;
                width: .28rem;
                height: .2rem;
                vertical-align: middle;
                margin-right: .08rem;
              span
                display: inline-block;
                vertical-align: middle;
          .u-pic
            width: 2.72rem;
            height: 2.72rem;
            position: relative;
            overflow: hidden;
            border-radius: .08rem;
            background: #f0f0f0;
            img
              display block
      .m-tpls-rec
        width: 100%;
        background: #fff;
        margin: .2rem 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: .36rem .3rem;
        a
          color: inherit;
        .u-name
          margin-bottom: .24rem;
          font-size: .28rem;
          color: #333;
          line-height: .36rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .ava
            width: .56rem;
            height: .56rem;
            overflow: hidden;
            border-radius: 50%;
            box-sizing: border-box;
            border: .01rem solid #d9d9d9;
            margin-right: .12rem;
            display: inline-block;
            vertical-align: middle;
          span
            display: inline-block;
            vertical-align: middle;
        .title
          font-size: .36rem;
          color: #333;
          line-height: .52rem;
          margin: -.08rem 0 .16rem 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          font-family: PingFangSC-Regular;
        .u-pic
          width: 6.9rem;
          height: 3.76rem;
          position: relative;
          margin-bottom: .2rem;
          overflow: hidden;
          border-radius: .08rem;
          background: #f0f0f0;
          img
            display: block;
        .u-rcount
          margin-bottom: -.16rem;
          font-size: .22rem;
          color: #999;
          line-height: .32rem;
          margin-top: .18rem;
          .ico
            display: inline-block;
            width: .28rem;
            height: .2rem;
            vertical-align: middle;
            margin-right: .08rem;
          span
            display: inline-block;
            vertical-align: middle;
    .m-tpls-picker
      position: relative;
      padding: .32rem .3rem;
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      box-sizing: border-box;
      a
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .info
          width: 4rem;
          .u-name
            font-size: .28rem;
            color: #333;
            line-height: .36rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .ava
              width: .56rem;
              height: .56rem;
              overflow: hidden;
              border-radius: 50%;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              border: .01rem solid #d9d9d9;
              margin-right: .12rem;
              display: inline-block;
              vertical-align: middle;
            span
              display: inline-block;
              vertical-align: middle;
          .title
            width: 100%;
            font-size: .36rem;
            color: #333;
            line-height: .44rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            padding-top: .32rem;
            font-family: PingFangSC-Regular;
          .desc
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: .28rem;
            line-height: .4rem;
            padding-top: .08rem;
            color: #7f7f7f;
          .u-rcount
            position: absolute;
            left: .3rem;
            bottom: .26rem;
            font-size: .22rem;
            color: #999;
            line-height: .32rem;
            margin-top: .18rem;
            span
              display: inline-block;
              vertical-align: middle;
        .u-pic
          width: 2.72rem;
          height: 2.72rem;
          position: relative;
          overflow: hidden;
          border-radius: .08rem;
          background: #f0f0f0;
          img
            display: block;
    .m-tpls-rec
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: .36rem .3rem;
      .u-name
        margin-bottom: .24rem;
        font-size: .28rem;
        color: #333;
        line-height: .36rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .ava
          width: .56rem;
          height: .56rem;
          overflow: hidden;
          border-radius: 50%;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          border: .01rem solid #d9d9d9;
          margin-right: .12rem;
          display: inline-block;
          vertical-align: middle;
        span
          display: inline-block;
          vertical-align: middle;
      .title
        font-size: .36rem;
        color: #333;
        line-height: .52rem;
        margin: -.08rem 0 .16rem 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-family: PingFangSC-Regular;
      .u-pic
        width: 6.9rem;
        height: 3.76rem;
        position: relative;
        margin-bottom: .2rem;
        overflow: hidden;
        border-radius: .08rem;
        background: #f0f0f0;
        img
          display: block;
      .u-rcount
        margin-bottom: -.16rem;
        font-size: .22rem;
        color: #999;
        line-height: .32rem;
        margin-top: .18rem;
        span
          display: inline-block;
          vertical-align: middle;
</style>
