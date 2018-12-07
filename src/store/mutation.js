import {GET_MSITE_DATA,GETCATEGORYDATE,GETSHIWUDATA} from "./mutation-type"
export default {
  //传递的数据一定是对象包裹吗
  [GET_MSITE_DATA](state,{msiteData}){
    // console.log(state,msiteData);
    state.msiteData=msiteData;
  },
  [GETCATEGORYDATE](state,{categoryData}){
    state.categoryData=categoryData;
  },
  [GETSHIWUDATA](state,{shiwuData}){
    state.shiwuData=shiwuData;
  }
}
