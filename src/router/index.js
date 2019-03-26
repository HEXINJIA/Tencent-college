import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//子路由
import staff from './staff'

const route=[
  {
    path: '/',
    redirect: '/staff',
    hidden: true
  }
]
const routes = route.concat(staff)
export default new Router({
  routes
})
