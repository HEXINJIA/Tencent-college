import axios from 'axios'
import { throwErr } from '@/utils/throwEr'
import store from '@/store'   //引入vuex的相关操作
import { Message } from 'element-ui'
import router from '@/router'

//过滤请求
axios.interceptors.request.use(config => {
  config.timeout = 10000 //请求响应时间
  config.headers["Access-Control-Allow-Origin"]="*";

  config.headers['api_token'] = store.getters.token||"Jnkh2vQkg2";
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  return config
}, error => {
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.status === 1401) {
      return Promise.reject(response.data)
      // store.dispatch('setUserInfo', {})
      Message({
        message: '未登录'
      })
      // router.push('/login')
     //使用Promise.resolve 正常响应
      return Promise.reject(response.data)
    } else  {
      return Promise.resolve(response.data)
    }
  },
  error => {
    if (error && error.response) {
      let res = {}
      res.code = error.response.status
      res.msg = throwErr(error.response.status, error.response) //throwErr 捕捉服务端的http状态码 定义在utils工具类的方法
      return Promise.reject(res)
    }
    return Promise.reject(error)
  }
)
export default function request(method, url, data) {  //暴露 request 给我们好API 管理
  method = method.toLocaleLowerCase()   //封装RESTful API的各种请求方式 以 post get delete为例
  if (method === 'post') {
    return axios.post(url, data)    //axios的post 默认转化为json格式
  } else if (method === 'get') {
    return axios.get(url, {
      params: data
    })
  } else if (method === 'delete') {
    return axios.delete(url, {
      params: data
    })
  }
}
