/*
封装ajax请求
 */
import axios from "axios"
//使用es6封装ajax请求
export default function Ajax(url,data={},method="GET"){
  if(method=="GET"){
    //直接发送请求，把参数拼接在url后面
    //query参数
    //http:www.baidu.com?name='zz'& age='11'& id='xxx'
    let lastStr="";
    Object.keys(data).forEach((key)=>{
      //出来混迟早是要还的
      lastStr+=key+"="+data[key]+"&";
    })
    if(lastStr.lastIndexOf("&")==lastStr.length-1){
      //去除最后一个&
      lastStr=lastStr.substring(0,lastStr.length-1)
    }
    if(lastStr){
      url=url+"?"+lastStr;
    }
    //param参数(不写试试)
    return axios.get(url)
  }else if(method="POST"){
    return axios.post(url,data)
  }
}

// api("http://www.baidu.com",{name:"zzx",age:18})
