<template>
  <div class="wrapper">
    <div class="line" style="position:fixed;left:0;top:0 ;width:100%;z-index: 10">
      <a class="logo" href="/"></a>
      <div class="m-topSearchIpt ipt">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共19934款好物</span>
      </div>
      <div class="loginBtn">登录</div>
    </div>
    <div class="tabWrap" style="margin-top:1rem;position:fixed;left:0;top:0 ;width:100%;z-index: 10">
      <div class="m-tabs  scroll">
        <transition name="fade">
          <div class="hiddenTabList" v-if="isShowMore">
            <div class="tabAlter">全部频道</div>
            <div class="moreCate">
              <div class="cateTag">推荐</div>
              <div class="cateTag">居家</div>
              <div class="cateTag">鞋包配饰</div>
              <div class="cateTag">服装</div>
              <div class="cateTag">电器</div>
              <div class="cateTag">洗护</div>
              <div class="cateTag">饮食</div>
              <div class="cateTag">餐厨</div>
              <div class="cateTag">婴童</div>
              <div class="cateTag">文体</div>
              <div class="cateTag">特色区</div>
            </div>
          </div>
        </transition>
        <header>
          <div class="inner" style="position:relative;height:100%;width:100%;overflow:hidden;">
            <div class="list">
              <!--active-->

              <div class="tab " v-for="(cateItem,index) in msiteData.cateList" :key="index">
                <span class="txt">{{cateItem.name}}</span>
              </div>
            </div>
          </div>
        </header>
        <i class="showList" style="transition: all .5s" @click="handleC">
          <img src="./img/bottom.png" alt="">
        </i>

      </div>
      <div class="toggleWrap" data-reactid=".0.0.0.1.1.1">
        <div class="linear" data-reactid=".0.0.0.1.1.1.0"></div>
        <div class="toggle" data-reactid=".0.0.0.1.1.1.1">
          <div class="icon" data-reactid=".0.0.0.1.1.1.1.0"></div>
        </div>
      </div>
    </div>
    <div class="outer-wrap" style="height: 10rem">
      <div class="inner_wrap">
        <div class="slideWarp" style="margin-top: 2.1rem">
          <div class="m-slide m-indexSlide" data-reactid=".0.1.0">
            <div class="slide-con" data-reactid=".0.1.0.0">
              <div class="swiper-container common-swiper-container swiper-container-horizontal">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(focus_item,index) in msiteData.focusList" :key="index">
                    <img :src="focus_item.picUrl">
                  </div>
                </div>
                <div
                  class="swiper-pagination common-swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                  <!--分页器经常会消失-->

                </div>
              </div>
            </div>
          </div>
        </div>
        <!--横边框-->
        <div class="m-indexServicePolicy newUser active">
          <ul class="g-grow">
            <li class="item" v-for="(policyItem,index) in msiteData.policyDescList" :key="index">
              <a>
                <i class="u-icon u-icon-servicePolicy-index"
                   :style="`background-image:url(${policyItem.icon});`"></i>
                <span class="text">{{policyItem.desc}}</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="m-kingKongModule"
             style="background-image:url(http://yanxuan.nosdn.127.net/56cd3b1e32f4d2edd03915efcef04de0.png);background-size:100% 100%;">
          <div class="m-carousel kingkongCarousel">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-if="msiteData.kingKongModule">
                  <a v-for="(kingkongItem,index) in msiteData.kingKongModule.kingKongList" :key="index"
                     class="kingkong-item mb-9" :href="kingkongItem.schemeUrl"
                     data-yxstat="{&quot;event_name&quot;:&quot;click_index_kingkong&quot;,&quot;event_action&quot;:&quot;click&quot;,&quot;page_name&quot;:&quot;index&quot;,&quot;parameters&quot;:{&quot;name&quot;:&quot;居家&quot;,&quot;picUrl&quot;:&quot;http://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png&quot;,&quot;sequen&quot;:1,&quot;schemeUrl&quot;:&quot;http://m.you.163.com/item/list?categoryId=1005000&amp;style=pd&quot;,&quot;userType&quot;:1},&quot;topage&quot;:&quot;http://m.you.163.com/item/list?categoryId=1005000&amp;style=pd&quot;}">
                    <div class="icon">
                      <img class="img" :src="kingkongItem.picUrl">
                    </div>
                    <div class="txt" style="color:#333333;">{{kingkongItem.text}}</div>
                  </a>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div
          v-if="msiteData.bigPromotionModule"
          class="doubleT"
          style="width:10rem;height:4.408888888888889rem;background:url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&amp;crop=0_0_750_496);background-size:100% 100%;"
          data-reactid=".0.4.1.$0">
          <div data-reactid=".0.4.1.$0.0">
            <a class="promItem" style="width:100%;height:100%;"
               :href="msiteData.bigPromotionModule.bigPromotionList[0].data.contents[0].schemeUrl"
               data-yxstat="{&quot;event_name&quot;:&quot;click_index_12atmosphere&quot;,&quot;event_action&quot;:&quot;click&quot;,&quot;page_name&quot;:&quot;index&quot;,&quot;parameters&quot;:{&quot;picUrl&quot;:&quot;https://yanxuan.nosdn.127.net/15435902145614507.gif&quot;,&quot;sequen&quot;:1,&quot;schemeUrl&quot;:&quot;https://act.you.163.com/act/pub/35lg3M4T9f.html&quot;,&quot;userType&quot;:1},&quot;topage&quot;:&quot;https://act.you.163.com/act/pub/35lg3M4T9f.html&quot;}"
               data-reactid=".0.4.1.$0.0.$0">
              <div class="m-lazyload img m-lazyload-loaded" data-reactid=".0.4.1.$0.0.$0.0">
                <img :data-original="msiteData.bigPromotionModule.bigPromotionList[0].data.contents[0].picUrl"
                     :data-src="msiteData.bigPromotionModule.bigPromotionList[0].data.contents[0].picUrl"
                     class="swiper-lazy" :src="msiteData.bigPromotionModule.bigPromotionList[0].data.contents[0].picUrl"
                     style="display: inline;">
              </div>
            </a></div>
        </div>

        <div class="activity_02" v-if="msiteData.bigPromotionModule"
             :style="`width:10rem;height:5.226666666666667rem;background:url(${msiteData.bigPromotionModule.backgroundUrl});background-size:100% 100%;`">
          <div>
            <a class="promItem promItem-ls"
               :href="msiteData.bigPromotionModule.bigPromotionList[1].data.contents[0].schemeUrl"
               data-yxstat="{&quot;event_name&quot;:&quot;click_index_12atmosphere&quot;,&quot;event_action&quot;:&quot;click&quot;,&quot;page_name&quot;:&quot;index&quot;,&quot;parameters&quot;:{&quot;picUrl&quot;:&quot;https://yanxuan.nosdn.127.net/15439064549673720.png&quot;,&quot;sequen&quot;:4,&quot;schemeUrl&quot;:&quot;https://act.you.163.com/act/pub/1Ysh5rCDy3.html&quot;,&quot;userType&quot;:1},&quot;topage&quot;:&quot;https://act.you.163.com/act/pub/1Ysh5rCDy3.html&quot;}">
              <div class="m-lazyload img m-lazyload-loaded" data-reactid=".0.4.1.$1.0.0.0">
                <img class="swiper-lazy" :src="msiteData.bigPromotionModule.bigPromotionList[1].data.contents[0].picUrl"
                     style="display: inline;">
              </div>
            </a>
            <div class="promItem promItem-ls"><a class="item_zz"
                                                 :href="msiteData.bigPromotionModule.bigPromotionList[1].data.contents[1].picUrl"
                                                 data-yxstat="{&quot;event_name&quot;:&quot;click_index_12atmosphere&quot;,&quot;event_action&quot;:&quot;click&quot;,&quot;page_name&quot;:&quot;index&quot;,&quot;parameters&quot;:{&quot;picUrl&quot;:&quot;https://yanxuan.nosdn.127.net/15439064549673720.png&quot;,&quot;sequen&quot;:4,&quot;schemeUrl&quot;:&quot;https://act.you.163.com/act/pub/1Ysh5rCDy3.html&quot;,&quot;userType&quot;:1},&quot;topage&quot;:&quot;https://act.you.163.com/act/pub/1Ysh5rCDy3.html&quot;}">
              <div class="m-lazyload img img-s m-lazyload-loaded" data-reactid=".0.4.1.$1.0.1.0.0">
                <img class="swiper-lazy" :src="msiteData.bigPromotionModule.bigPromotionList[1].data.contents[1].picUrl"
                     style="display: inline;">
              </div>
            </a>
              <a class="item_zz" :href="msiteData.bigPromotionModule.bigPromotionList[1].data.contents[2].schemeUrl"
                 data-yxstat="{&quot;event_name&quot;:&quot;click_index_12atmosphere&quot;,&quot;event_action&quot;:&quot;click&quot;,&quot;page_name&quot;:&quot;index&quot;,&quot;parameters&quot;:{&quot;picUrl&quot;:&quot;https://yanxuan.nosdn.127.net/15439064549673720.png&quot;,&quot;sequen&quot;:4,&quot;schemeUrl&quot;:&quot;https://act.you.163.com/act/pub/1Ysh5rCDy3.html&quot;,&quot;userType&quot;:1},&quot;topage&quot;:&quot;https://act.you.163.com/act/pub/1Ysh5rCDy3.html&quot;}"
                 data-reactid=".0.4.1.$1.0.1.1">
                <div class="m-lazyload img img-s m-lazyload-loaded" data-reactid=".0.4.1.$1.0.1.1.0"><img
                  class="swiper-lazy"
                  :src="msiteData.bigPromotionModule.bigPromotionList[1].data.contents[2].picUrl"
                  style="display: inline;margin-top: -0.04rem;"></div>
              </a></div>
          </div>
        </div>

        <div class="activity_03" v-if="msiteData.bigPromotionModule"
             :style="`width:10rem;height:2.7111111111111112rem;background:url(${msiteData.bigPromotionModule.backgroundUrl});background-size:100% 100%;`">
          <div>
            <a class="promItem" style="width:50%;height:100%;"
               :href="msiteData.bigPromotionModule.bigPromotionList[2].data.contents[0].schemeUrl"
               data-yxstat="{&quot;event_name&quot;:&quot;click_index_12atmosphere&quot;,&quot;event_action&quot;:&quot;click&quot;,&quot;page_name&quot;:&quot;index&quot;,&quot;parameters&quot;:{&quot;picUrl&quot;:&quot;https://yanxuan.nosdn.127.net/15438955793172733.png&quot;,&quot;sequen&quot;:5,&quot;schemeUrl&quot;:&quot;https://act.you.163.com/act/pub/n5Ypk5ibe8.html&quot;,&quot;userType&quot;:1},&quot;topage&quot;:&quot;https://act.you.163.com/act/pub/n5Ypk5ibe8.html&quot;}">
              <div class="m-lazyload img m-lazyload-loaded">
                <img class="swiper-lazy" data-reactid=".0.4.1.$2.0.$0.0.0"
                     :src="msiteData.bigPromotionModule.bigPromotionList[2].data.contents[0].picUrl"
                     style="display: inline;">
              </div>
            </a>
            <a class="promItem" style="width:50%;height:100%;"
               :href="msiteData.bigPromotionModule.bigPromotionList[2].data.contents[1].schemeUrl"
               data-yxstat="{&quot;event_name&quot;:&quot;click_index_12atmosphere&quot;,&quot;event_action&quot;:&quot;click&quot;,&quot;page_name&quot;:&quot;index&quot;,&quot;parameters&quot;:{&quot;picUrl&quot;:&quot;https://yanxuan.nosdn.127.net/15435903918604513.png&quot;,&quot;sequen&quot;:6,&quot;schemeUrl&quot;:&quot;https://act.you.163.com/act/pub/WWK5JewfVF.html&quot;,&quot;userType&quot;:1},&quot;topage&quot;:&quot;https://act.you.163.com/act/pub/WWK5JewfVF.html&quot;}">
              <div class="m-lazyload img m-lazyload-loaded" data-reactid=".0.4.1.$2.0.$1.0">
                <img class="swiper-lazy"
                     data-reactid=".0.4.1.$2.0.$1.0.0"
                     :src="msiteData.bigPromotionModule.bigPromotionList[2].data.contents[1].picUrl"
                     style="display: inline;">
              </div>
            </a>
          </div>
        </div>

        <div class="m-freshmanModule m-indexFloor">
          <div class="moduleTitle"><span class="txt">新人专享礼</span></div>
          <div class="content">
            <a class="left" href="javascript:void(0)">
              <div class="name">新人专享礼包</div>
              <div class="imgWrap">
                <div class="m-lazyload img m-lazyload-loaded">
                  <img class="swiper-lazy" src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png"
                       style="display: inline;">
                </div>
                <div class="animate"></div>
              </div>
            </a>

            <div class="right">
              <div class="module1"><a class="m-activityItem" href="javascript:void(0)"
                                      style="background-size:100% 100%;">
                <div class="picWrap">
                  <div class="m-lazyload pic m-lazyload-loaded">
                    <img class="swiper-lazy" src="http://yanxuan.nosdn.127.net/d50517d5b6d49c2d571cde37fdb54841.png"
                         style="display: inline;"></div>
                  <div class="discount">
                    <div class="line1">¥137</div>
                    <div class="line2">¥249</div>
                  </div>
                </div>
                <div class="cnt">
                  <div class="title">福利社</div>
                  <div class="subTitle">今日特价</div>
                  <span></span></div>
              </a></div>
              <div class="module2"><a class="m-activityItem" href="javascript:void(0)"
                                      style="background-size:100% 100%;">
                <div class="picWrap">
                  <div class="m-lazyload pic m-lazyload-loaded"><img class="swiper-lazy"
                                                                     src="http://yanxuan.nosdn.127.net/589f0990b8ba1d354a698731afacd2d4.png"
                                                                     style="display: inline;"></div>
                  <div class="discount">
                    <div class="line1">¥1</div>
                    <div class="line2">¥9</div>
                  </div>
                </div>
                <div class="cnt">
                  <div class="title">新人拼团</div>
                  <div class="subTitle"></div>
                  <div class="tag">1元起包邮</div>
                </div>
              </a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from "swiper"
  import BScroll from 'better-scroll'

  export default {
    name: "MSite",
    data(){
      return{
        isShowMore:false
      }
    },

    mounted() {
      //触发action
      this.$store.dispatch("getMsite");

    },

    watch: {
      msiteData: function () {
        this.$nextTick(() => {
          //todo:理解有问题 首页导航滑动

          new BScroll('.inner', {
            click: true,
            scrollX: true, // 水平滑动
          });

          //整个页面的滑动
          new BScroll('.outer-wrap', {
            click: true,
          });

          new Swiper('.swiper-container-horizontal', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    },
    computed: {
      ...mapState(["msiteData"])
    },
    methods:{
      handleC(){
        this.isShowMore=!this.isShowMore;
        var div=document.querySelector(".showList")
        if(this.isShowMore){
          div.style.transform='rotate(180deg)';
        }else{
          div.style.transform='rotate(0deg)';
        }

      }
    }
  }
</script>

<style scoped lang="stylus">

  .line
    box-sizing: border-box;
    position: relative;
    z-index: 2;
    display flex;
    flex-flow: row nowrap;
    align-items: center;
    background: #fff;
    padding: .21333rem .4rem;
    .logo
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
      background-size: 100% 100%;
      background-position: center;
      width: 1.84rem;
      height: .53333rem;
      display: inline-block;
      margin-right: .26667rem;
    .m-topSearchIpt
      flex-grow: 1;
      height: .74667rem;
      font-size: .37333rem;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      background-color: #ededed;
      border-radius: .10667rem;
      .icon
        display: inline-block;
        vertical-align: middle;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: .37333rem;
        height: .37333rem;
        margin-right: .13333rem;
      .placeholder
        color: #666;
        font-size: .37333rem;
    .loginBtn
      width: .98667rem;
      height: .53333rem;
      line-height: .53333rem;
      text-align: center;
      color: #b4282d;
      border: 1px solid #b4282d;
      border-radius: .10667rem;
      margin-left: .21333rem;
      font-size 0.24rem

  .tabWrap
    position: relative;
    z-index: 2;
    background: #fff;
    margin-top: -.01333rem;
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
    .hiddenTabList
      position: absolute;
      z-index: 10;
      background: #fff;
      margin-top: -.01333rem;
      .tabAlter
        height: .8rem;
        line-height: .8rem;
        padding-left: .4rem;
        font-size: .37333rem;
      .moreCate
        padding-top: .32rem;
        overflow: hidden;
        .cateTag
          width: 2rem;
          height: .74667rem;
          line-height: .74667rem;
          text-align: center;
          float: left;
          margin-bottom: .53333rem;
          margin-left: .4rem;
          background: #FAFAFA;
          border: 1px solid #CCC;
          border-radius: .05333rem;
          font-size 12px
    .m-tabs
      padding-right: 1.33333rem;
      width: 100%;
      position relative
      .showList
        position absolute
        right .5rem
        top .3rem
        width .6rem
        height .6rem
        z-index: 20
        img
          display block
          width 100%
          height 100%
      header
        display: flex;
        flex-flow: row nowrap;
        background-color: #fff;
        position: relative;
        .inner
          position: relative;
          height: 100%;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-flow: row nowrap;
          .list
            display: flex;
            flex-flow: row nowrap;
            flex-shrink: 0;
            padding: 0 .4rem;
            background: #fff;
            .tab
              margin-left: .26667rem;
              flex-shrink: 0;
              position: relative;
              & :first-of-type
                margin-left: 0;
              & .active
                color: #b4282d;
              .txt
                position: relative;
                display: inline-block;
                padding: 0 .21333rem;
                line-height: .8rem;
                font-size: .37333rem;
                text-align: center;
    .toggleWrap
      display: flex;
      flex-grow: 0;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;

  .slideWarp
    height: 4.93333rem;
    position: relative;
    .m-slide
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      .slide-con
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        .swiper-container
          height: 100%;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          overflow: hidden;
          z-index: 1;
          .swiper-wrapper
            z-index: 1;
            display: flex;
            width: 100%;
            height: 100%;
            transition-property: transform, -webkit-transform;
            box-sizing: content-box;
            position: relative;
            .swiper-slide
              width: 100%;
              position: relative;
              flex-shrink: 0;
              height: 100%;
              img
                width: 100%;
                height: auto;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                background-color: #f9f9f9;
          .swiper-pagination
            transition: .3s;
            bottom: .4rem;
            width: 100%;
            left: 0;
            position: absolute;
            text-align: center;
            z-index: 10;
            .swiper-pagination-bullet
              margin: 0 .13333rem 0 0;
              cursor: pointer;
              width: .53333rem;
              height: .05333rem;
              display: inline-block;
              background: #fff;
              opacity: .4;
              border-radius: 0;

  .m-indexServicePolicy
    background: #FFEDDB;
    .g-grow
      width: 100%;
      height: .96rem;
      padding: 0 .4rem;
      display: flex;
      flex-flow: row nowrap;
      -webkit-box-align: center;
      align-items: center;
      zoom: 1;
      .item
        -webkit-box-flex: 1;
        flex: 1;
        float: left;
        list-style: none;
        a
          display: inline-block;
          vertical-align: middle;
          height: .42667rem;
          margin-top: -1rem; //不使用margin-top会掉下来
          .u-icon
            display: inline-block;
            vertical-align: middle;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .42667rem;
            height: .42667rem;
            font-style: normal;
          .text
            color: #B4282D;
            font-size: .32rem;
            margin-left: .10667rem;
            line-height: .42667rem;
            display: inline-block;
            vertical-align: middle;

  .m-kingKongModule
    background-size: 100% 100%;
    width: 100%;
    height: 5.22667rem;
    .m-carousel
      background: 0 0;
      position: relative;
      .swiper-container
        padding-bottom: .69333rem;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        z-index: 1;
        .swiper-wrapper
          height: auto;
          position: relative;
          width: 100%;
          z-index: 1;
          display: flex;
          transition-property: transform, -webkit-transform;
          box-sizing: content-box;
          .swiper-slide
            height: auto;
            flex-shrink: 0;
            width: 100%;
            position: relative;
            .kingkong-item
              margin-bottom: .12rem;
              display: block;
              width: 1.46667rem;
              height: 2.08rem;
              float: left;
              margin: .13333rem .26667rem 0;
              .icon
                width: 1.46667rem;
                height: 1.46667rem;
                .img
                  width: 1.46667rem;
                  height: 1.46667rem;
                  display: block;
              .txt
                color: #333333;
                margin-top: .13333rem;
                text-align: center;
                font-size: .32rem;
                line-height: .48rem;
                white-space: nowrap;
        .swiper-pagination
          width: auto;
          left: 0;
          bottom: .42667rem;
          height: .05333rem;
          margin-bottom: 0;
          margin-right: 0;
          padding-right: 0;
          right: 0;
          position: absolute;
          text-align: center;
          transition: .3s;
          transform: translate3d(0, 0, 0);
          z-index: 10;

  .doubleT
    width: 10rem;
    height: 4.408888888888889rem;
    background: url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_0_750_496);
    background-size: 100% 100%;
    div
      a
        width: 100%;
        height: 100%;
        float: left;
        display: block;
        .m-lazyload
          background: 0 0;
          height: 100%;
          width: 100%;
          img
            display: inline;
            width: 100%;
            height: auto;

  .activity_02
    width: 10rem;
    height: 5.226666666666667rem;
    background: url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_496_750_588);
    background-size: 100% 100%;
    div
      height 100%;
      .promItem-ls
        width: 50%;
        height: 100%;
        float: left;
        display: block;
        .m-lazyload
          background: 0 0;
          height: 100%;
          width: 100%;
          img
            display: inline;
            width: 100%;
            height: auto;
      .promItem
        width: 50%;
        height: 100%;
        float: left;
        .item_zz
          display: block;
          .m-lazyload
            background: 0 0;
            height: 50%;
            width: 100%;
            img
              display: inline;
              width: 100%;
              height: auto;

  .activity_03
    width: 10rem;
    height: 2.7111111111111112rem;
    background: url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_1084_750_305);
    background-size: 100% 100%;
    div
      a
        width: 50%;
        height: 100%;
        float: left;
        display: block;
        .m-lazyload
          background: 0 0;
          height: 100%;
          width: 100%;
          img
            display: inline;
            width: 100%;
            height: auto;

  .m-freshmanModule
    background-color: #fff;
    margin-bottom: .26667rem;
    background: #fff;
    margin-top: .26667rem;
    padding-bottom: .4rem;
    .moduleTitle
      height: 1.2rem;
      width: 100%;
      line-height: 1.2rem;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: .42667rem;
      padding: 0 .4rem;
      background: #fff;
      overflow: hidden;
      .txt
        display: inline-block;
        position: relative;
    .content
      padding-left: .4rem;
      overflow: hidden;
      .left
        display: block;
        width: 4.57333rem;
        height: 5.78667rem;
        background: #F9E9CF;
        border-radius: .05333rem;
        margin-right: .05333rem;
        float: left;
        color: #333;
        .name
          font-family: PingFangSC-Medium;
          font-size: .42667rem;
          padding: .4rem 0 0 .4rem;
        .imgWrap
          margin: .66667rem auto;
          width: 3.04rem;
          height: 3.05333rem;
          position: relative;
          .m-lazyload
            width: 3.04rem;
            height: 3.05333rem;
            img
              display: inline;
              height: 100%;
              width: 100%;
          .animate
            position: absolute;
            width: .4rem;
            height: .26667rem;
            bottom: .24rem;
            right: .6rem;
            /*background: url(//yanxuan.nosdn.127.net/3f7e731….png) no-repeat;*/
            background-size: 100% 100%;
            animation: carousel 1s linear infinite;
      .right
        float: left;
        .module1
          background: #FBE2D3;
          border-radius: 4px;
          width: 4.57333rem;
          height: 2.86667rem;
          margin-bottom: .05333rem;
          .m-activityItem
            background-size: 100% 100%;
            height: 2.86667rem;
            display: block;
            color: #333;
            width: 4.57333rem;
            float: left;
            border-radius: .05333rem;
            margin: 0 .05333rem .05333rem 0;
            font-size: .32rem;
            padding: .26667rem 0 0 .4rem;
            position: relative;
            .picWrap
              top: .26667rem;
              position: absolute;
              right: 0;
              width: 2.66667rem;
              height: 2.66667rem;
              .m-lazyload
                width: 2.66667rem;
                height: 2.66667rem;
                img
                  display: inline;
                  width: 100%;
                  height: auto;
              .discount
                top: 0;
                right: .4rem;
                position: absolute;
                width: 1.06667rem;
                height: 1.06667rem;
                opacity: .8;
                background: #F59524;
                border-radius: 50%;
                padding-top: .13333rem;
                color: #fff;
                text-align: center;
                .line1
                  font-size: .32rem;
                .line2
                  zoom 1
                  font-size: .26667rem;
                  margin-top: -.09333rem;
                  text-decoration: line-through;
            .cnt
              position: relative;
              .title
                font-family: PingFangSC-Medium;
                font-size: .42667rem;
              .subTitle
                color: #7F7F7F;
        .module2
          background: #FFECC2;
          border-radius: 4px;
          width: 4.57333rem;
          height: 2.86667rem;
          .m-activityItem
            /*background-image: url(undefined);*/
            background-size: 100% 100%;
            height: 2.86667rem;
            display: block;
            color: #333;
            width: 4.57333rem;
            float: left;
            border-radius: .05333rem;
            margin: 0 .05333rem .05333rem 0;
            font-size: .32rem;
            padding: .26667rem 0 0 .4rem;
            position: relative;
            .picWrap
              position: absolute;
              right: 0;
              width: 2.66667rem;
              height: 2.66667rem;
              .m-lazyload
                width: 2.66667rem;
                height: 2.66667rem;
                img
                  display: inline;
                  width: 100%;
                  height: auto;

              .discount
                top: 0;
                right: .4rem;
                position: absolute;
                width: 1.06667rem;
                height: 1.06667rem;
                opacity: .8;
                background: #F59524;
                border-radius: 50%;
                padding-top: .13333rem;
                color: #fff;
                text-align: center;
                .line1
                  font-size: .32rem;
                .line2
                  font-size: .26667rem;
                  margin-top: -.09333rem;
                  text-decoration: line-through;
            .cnt
              position: relative;
              .title
                font-family: PingFangSC-Medium;
                font-size: .42667rem;
              .subTitle
                color: #7F7F7F;
              .tag
                position: relative;
                display: inline-block;
                padding: 0 .13333rem;
                height: .42667rem;
                background: #CBB693;
                border-radius: .05333rem;
                color: #fff;
                font-size: .29333rem;
                line-height: .42667rem;
                text-align: center;
</style>
