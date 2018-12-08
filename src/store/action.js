//这种导入方式可能会错
import {GET_MSITE_DATA,GETCATEGORYDATE,GETSHIWUDATA,SET_FULLPATH} from "./mutation-type"
import {reqMSite,reqCategory,reqShiWu,reqShiWu_02,reqShiWu_03,loginByPhone,reqMsg,loginByMsg} from "../api/index"
import { Toast ,MessageBox } from 'mint-ui';
export default {
  async getMsite({commit}){
    //发送ajax请求获得数据
    var result=await reqMSite()
    if(result.data.code===200){
      commit(GET_MSITE_DATA,{msiteData:result.data.data})
    }

  },
  async getCategory({commit}){
    //发送ajax请求获得数据
    var result=await reqCategory()
    if(result.data.code===200) {
      commit(GETCATEGORYDATE, {categoryData:result.data.data})
    }
  },
  //得到第一页识物数据
  async getShiWu_1({commit}){
    //发送ajax请求获得数据
    var result=await reqShiWu()
    if(result.data.code===200) {
      commit(GETSHIWUDATA, {shiwuData:result.data.data})
    }
  },
  //得到第二页识物数据
  async getShiWu_2({commit}){
    //发送ajax请求获得数据
    console.log("进入第二页action");
    var result=await reqShiWu_02()
    if(result.data.code===200) {
      commit(GETSHIWUDATA, {shiwuData:result.data.data.data.result})
    }
  },
  //得到第三页识物数据
  async getShiWu_3({commit}){
    //发送ajax请求获得数据
    console.log("进入第三页action");
    var result=await reqShiWu_03()
    if(result.data.code===200) {
      commit(GETSHIWUDATA, {shiwuData:result.data.data.data.result})
    }
  },
  async asyncLoginByPhone({commit},{name,pwd,captcha,getNewImg,that}){
    //todo:返回的结果可能有问题
    var result=await loginByPhone({name,pwd,captcha})
    getNewImg()
    console.log("---123",result);
    if(result.data.code===200) {
      console.log("得到的数据为:",result.data.data);
      commit(GETSHIWUDATA, {user:result.data})
      that.$router.replace("/profile")
    }
  },
  async getCode ({commit},{phone,clearTime}) {
    const result = await reqMsg({phone});
    if(result.code===0) {
      // alert("消息发送成功")
      Toast("验证码已发送");
    }else{
      // alert("消息发送失败")
      MessageBox("提示","发送验证码失败");
      clearTime();
    }
  },
  async asyncLoginMsg({commit}){
    var result=await loginByMsg()
    if(result.data.code===200) {
      commit(GETSHIWUDATA, {user:result.data})
    }
  },
  setFullPath({commit},{fullpath}){
    commit(SET_FULLPATH,{fullpath})
  }
}
