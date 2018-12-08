<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">网易严选</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:loginByMsg==true}" @click="loginByMsg=true">短信登录</a>
          <a href="javascript:;" :class="{on:loginByMsg==false}" @click="loginByMsg=false">密码登录</a>
        </div>
      </div>


      <div class="login_content">
        <form>
          <div :class="{on:loginByMsg==true}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!computedPhone || time>0" class="get_verification"
                      :class="{right_phone_number:computedPhone}" @click.prevent="sendCode">
                {{time > 0 ? `已发送${time}秒` : "获取验证码"}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="checkCode">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:loginByMsg==false}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input :type="showPassword==true ? 'password' : 'text' " maxlength="8" placeholder="密码" v-model="pwd">
                <div class="switch_button" :class="showPassword==false ? 'off' : 'on' "
                     @click="showPassword=!showPassword">
                  <div class="switch_circle"></div>
                  <span class="switch_text">...</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <!--直接在src上面写url就能实现验证码-->
                <img class="get_verification" :src="imgUrl" alt="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit" @click="handleClick">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <span href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </span>
    </div>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui';

  export default {
    data() {
      return {
        loginByMsg: true,
        showPassword: false,
        imgUrl: "http://localhost:5000/captcha",
        name: "",
        time:0,
        pwd: "",
        captcha: "",
        checkCode: "",
        phone: "",
      }
    },
    computed: {
      computedPhone() {
        let reg = /^1\d{10}$/gi;
        return reg.test(this.phone)
      },
    },
    methods: {
      clearTime(){
        this.time=0;
      },
      sendCode(){
        this.$store.dispatch("getCode",{phone:this.phone,clearTime:this.clearTime});
        this.time=30;
        let id=setInterval(()=> {
          this.time--;
          if(this.time<0){
            clearInterval(id);
          }
        },1000)
      },

      async handleClick() {
        //图片验证码登陆
        if (this.loginByMsg == false) {
          let {name, pwd, captcha} = this
          if (!name) {
            return MessageBox("提示", "用户名不能为空");
          } else if (!pwd) {
            return MessageBox("提示", "密码不能为空");
          } else if (captcha.length != 4) {
            return MessageBox("提示", "验证码长度应为4");
          }
          this.getNewImg();
          this.$store.dispatch("asyncLoginByPhone", {name, pwd, captcha, getNewImg: this.getNewImg, that: this});
        } else {
          //手机号登陆
          //短信登陆
          if (!this.computedPhone) {
            return MessageBox("提示", "手机号不正确")
          } else if (!/^\d{6}$/gi.test(code)) {
            return MessageBox("提示", "验证码必须是六位数字")
          }
          const result = await loginByMsg({phone: this.phone, code: this.checkCode})
          if (result.code == 0) {
            //保存user
            this.$store.commit(RECEIVE_USER, {user: result.data})
            this.$router.replace("/profile")
          } else {
            MessageBox("提示", "登录请求失败1");
          }
        }


      },
      //无论响应成功或者失败，都刷新一个页面
      getNewImg() {
        let imgUrl = this.imgUrl
        this.imgUrl = imgUrl + "?time=" + Date.now();
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #b4282d
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          > a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #b4282d
              font-weight 700
              border-bottom 2px solid #b4282d
      .login_content
        > form
          > div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #b4282d
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s, border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #b4282d
                  > .switch_circle
                    transform translateX(.5rem)
                > .switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0, 0, 0, .1)
                  transition transform .3s
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              > a
                color #b4282d
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #b4282d
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        > .iconfont
          font-size 20px
          color #999
</style>
