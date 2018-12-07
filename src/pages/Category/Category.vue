<template>
  <div class="wrapper" style="font-size: 24px;">
    <div class="g-row">
      <!--头部-->
      <div class="hdWraper" style="height:44px">
        <div class="m-hd">
          <div class="m-itemCateListHd">
            <div class="m-topSearchIpt ipt">
              <i class="icon"></i>
              <span class="placeholder">搜索商品, 共19900款好物</span>
            </div>
          </div>
        </div>
      </div>
      <!--侧边栏-->
      <div class="m-cateNavVertWrap">
        <div style="position:relative;height:100%;width:100%;overflow:hidden;">
          <ul class="m-cateNavVert">
            <li class="item" v-for="(category,index) in categoryData" :key="index">
              <a class="txt" :href="`/#/category?categoryId=${category.id}`">{{category.name}}</a>
            </li>

          </ul>
        </div>
      </div>
      <!--右边主体-->
      <div class="m-subCateList" v-if="categoryData[0]">
        <div class="banner" :style="`background-image:url(${categoryData[getIndex].wapBannerUrl});`">
          <div class="cnt">
          </div>
        </div>
        <!--专区结构-->
        <div class="cateList"  v-if="getIndex!==5">
          <ul class="list">
            <li class="cateItem" v-for="(subCate,index) in categoryData[getIndex].subCateList" :key="index">

              <a href="#">
                <div class="cateImgWrapper">
                  <img :src="subCate.wapBannerUrl" alt="" class="cateImg">
                </div>
                <div class="name">
                  {{subCate.name}}
                </div>
              </a>

            </li>
          </ul>
        </div>
        <!--下面结构-->
        <div v-else>

          <div class="cateList" v-for="(category,index) in categoryData[getIndex].subCateList" :key="index">
            <div class="hd">{{category.header}}</div>
            <ul class="list">
              <li class="cateItem" v-for="(item,index) in category.cateItems" :key="index">
                <a>
                  <div class="cateImgWrapper">
                    <img :src="item.imgSrc" alt="" class="cateImg">
                  </div>
                  <div class="name">{{item.name}}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"

  export default {
    name: "Category",
    mounted() {
      this.$nextTick(() => {
        this.$store.dispatch("getCategory");
      })
    },
    computed: {
      ...mapState(["categoryData"]),
      getIndex() {
        let flag = -1;
        let path = this.$route.fullPath;
        let id = this.$route.fullPath.substring(path.indexOf("=") + 1, path.length)
        if (id == "/category") {
//          console.log("进入这里");
          return 0;
        }
        this.categoryData.forEach(function (categoryItem, index) {
          if (categoryItem.id == id) {
            flag = index
          }
        })
        return flag;
      }
    }
  }
</script>

<style scoped lang="stylus">
  .g-row
    width: 10rem;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    .hdWraper
      .m-hd
        position fixed !important
        width 100%
        top 0
        left 0
        z-index 5
        .m-itemCateListHd
          position relative
          height: 1.17333rem;
          padding: 0 .4rem;
          background-color: #fff;
          display flex
          align-items center
          .m-topSearchIpt
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: center;
            height: .74667rem;
            font-size: .37333rem;
            background-color: #ededed;
            border-radius: .10667rem;
            &:after
              content: '';
              position: absolute;
              background-color: #d9d9d9;
              left: 0;
              width: 100%;
              height: 1px;
              transform-origin: 50% 100% 0;
              bottom: 0;
              transform scaleY(0.5)
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

    .m-cateNavVertWrap
      left: 0;
      top: 1.17333rem;
      position: fixed;
      bottom: 0;
      z-index: 4;
      width: 2.16rem;
      background-color: #fff;
      &::after
        content: '';
        position: absolute;
        background-color: rgba(0, 0, 0, .15);
        top: 0;
        bottom: 0;
        width: 1px;
        transform-origin: 100% 50% 0;
        right: 0;
        transform scaleX(0.5)
        text-size-adjust: 100%;

      .m-cateNavVert
        padding: .53333rem 0 1.84rem 0;
        .item
          margin-top: .53333rem;
          width: 100%;
          height: .66667rem;
          text-align: center;
          border: none;
          .txt
            display: block;
            color: #333;
            font-size: .37333rem;
            line-height: .66667rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
    .m-subCateList
      margin-left: 2.16rem;
      padding: .4rem .4rem .28rem;
      .banner
        position: relative;
        width: 100%;
        height: 2.56rem;
        display: table;
        margin-bottom: .42667rem;
        background: center no-repeat #f4f4f4;
        background-size: cover;
        border-radius: 4px;
        .cnt
          display: table-cell;
          vertical-align: middle;
          text-align: center;
          font-size: .37333rem;
          color: #fff;
      .cateList
        .cateItem
          display: inline-block;
          margin-right: .40333rem;
          font-size: 0;
          width: 1.92rem;
          vertical-align: top;
          .cateList
            margin-bottom: .16rem;
            .hd
              white-space: nowrap;
              max-width: 7.04rem;
              padding-bottom: .10667rem;
              margin-bottom: .32rem;
              text-align: left;
              font-size: .37333rem;
              font-weight: 700;
              border-bottom: 1px solid #d9d9d9;
            .list
              .cateItem
                display: inline-block;
                margin-right: .45333rem;
                font-size: 0;
                width: 1.92rem;
                vertical-align: top;
                .cateImgWrapper
                  width: 1.92rem;
                  height: 1.92rem;
                  img
                    display: block;
                    width: 100%;
                    background: #fff;
                    height: 100%;
                .name
                  height: .96rem;
                  font-size: .32rem;
                  text-align: center;
                  line-height: .48rem;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  color: #333;
                  overflow: hidden;
                  text-overflow: ellipsis;
          .cateImgWrapper
            width: 1.92rem;
            height: 1.92rem;
            background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/water-d839a69b0d.png) center no-repeat;
            .cateImg
              display: block;
              width: 100%;
              background: #fff;
              height: 100%;
          .name
            height: .96rem;
            font-size: .32rem;
            text-align: center;
            line-height: .48rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;

</style>
