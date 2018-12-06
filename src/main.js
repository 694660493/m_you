import Vue from "vue";
import App from "./App.vue"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from "./router/index"
import store from "./store"
import "./mock/mockServer"  //mockServer需要导入：需要导入


import { Tabbar, TabItem } from 'mint-ui';
Vue.use(MintUI)
//注册全局组件
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);


new Vue({
  el:"#app",
  data(){
    return {
      name:"网易严选"
    }
  },
  components:{
    App,
  },
  template: '<App/>',
  router,
  store,
})
