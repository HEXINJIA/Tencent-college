import request from '@/utils/repuest' //引入axios的封装方法
import {baseUrl} from './config'
export const login = (params) => {
  return request('post', `${baseUrl}/applicant/list`, params) //登陆获取自身信息
}

export const getApplicationList = (params) => {
  return request('post', `${baseUrl}/applicant/list`, params) //添加管理员
}

