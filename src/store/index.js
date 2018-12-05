import Vue from "vue"
import vuex from "vuex"
import actions from "./action"
import mutations from "./mutation"
import getters from "./getter"
import state from "./state"
//使用vuex
Vue.use(vuex);
let store=new vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store;
