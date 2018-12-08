import Ajax from "./ajax"
import Mock from "mockjs"

const BASE="/api"
//发ajxa请求得到数据

//得到首页数据(传入url,不需要参数,方式为get)
export const reqMSite= function (){ return Ajax("/msite")}
//得到分类数据(传入url,不需要参数,方式为get)
export const reqCategory= function (){ return Ajax("/category")}
//得到识物数据(传入url,不需要参数,方式为get)
export const reqShiWu= function (){ return Ajax("/shiwu?tab=1")}  //第一页
export const reqShiWu_02= function (){ return Ajax("/shiwu?tab=2")}  //第二页
export const reqShiWu_03= function (){ return Ajax("/shiwu?tab=3")}  //第三页
//用户名密码登陆接口
export const loginByPhone=({name,pwd,captcha})=>{return Ajax(BASE+"/login_pwd",{name,pwd,captcha},"POST")}
//发送短信验证码
export const reqMsg = ({phone}) => Ajax(BASE + `/sendcode?phone=${phone}`);
//手机号验证码登陆
export const loginByMsg=({phone,code})=> Ajax(BASE+"/login_sms",{phone,code})

