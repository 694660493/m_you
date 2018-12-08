import Vue from "vue"
import VueRouter from "vue-router"
// import s from "../components/notfount/notfount.vue"

const MSite=()=> import("../pages/MSite/MSite.vue")
const Category=()=> import("../pages/Category/Category.vue")
const Distinguish=()=> import("../pages/Distinguish/Distinguish.vue")
const Cart=()=> import("../pages/Cart/Cart.vue")
const Profile=()=> import("../pages/Profile/Profile.vue")
const Login=()=> import("../pages/Login/Login.vue")
const search=()=> import("../pages/search/search.vue")
const notfount=()=> import("../components/notfount/notfount.vue")

Vue.use(VueRouter) //在vue中使用路由

export default new VueRouter({

  // 将路由和组件对应映射起来
  routes:[
    {path:"/msite",component:MSite},
    {path:"/category",component:Category},
    {path:"/distinguish",component:Distinguish},
    {path:"/cart",component:Cart},
    {path:"/profile",component:Profile},
    {path:"/login",component:Login},
    {path:"/search",component:search},
    {path:"/",redirect:"/msite"},
    {path:"/*",name:"notfount",component:notfount},

  ]
})
