//这种导入方式可能会错
import {GET_MSITE_DATA,GETCATEGORYDATE,GETSHIWUDATA} from "./mutation-type"
import {reqMSite,reqCategory,reqShiWu} from "../api/index"
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
  async getShiWu({commit}){
    //发送ajax请求获得数据
    var result=await reqShiWu()
    if(result.data.code===200) {
      commit(GETSHIWUDATA, {shiwuDataL:result.data.data})
    }
  }
}
