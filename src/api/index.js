import Ajax from "./ajax"
import Mock from "mockjs"

const BASE=""
//发ajxa请求得到数据

//得到首页数据(传入url,不需要参数,方式为get)
export const reqMSite= function (){ return Ajax(BASE+"/msite")}
//得到分类数据(传入url,不需要参数,方式为get)
export const reqCategory= function (){ return Ajax(BASE+"/category")}
//得到识物数据(传入url,不需要参数,方式为get)
export const reqShiWu= function (){ return Ajax(BASE+"/shiwu")}
//得到购物车数据

//得到个人数据

