import {GET_MSITE_DATA,GETCATEGORYDATE,GETSHIWUDATA,LOGIN_BY_PHONE,GET_MSG,LOGIN_BY_MSG,SET_FULLPATH} from "./mutation-type"
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
  },
  [LOGIN_BY_PHONE](state,{user}){
    state.user=user;
  },
  [GET_MSG](state){

  },
  [LOGIN_BY_MSG](state,{user}){
    state.user=user;
  },
  [SET_FULLPATH](state,{fullpath}){
    state.fullpath=fullpath;
  }

}
