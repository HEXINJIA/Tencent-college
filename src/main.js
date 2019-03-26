import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import '@/assets/css/reset.css'
import '@/assets/fonts/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import install from '@/utils/install';
Vue.use(install);
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth === false) {
    next();
  } else { // 判断该路由是否需要登录权限
    if (store.getters.token) {
      next();
    } else {
      // store.dispatch('userInformation',{})
      next();
      // Vue.prototype.$confirm('由于您长时间未操作，系统已自动退出，请重新登录', '提示', {
      //   confirmButtonText: '确定',
      //   showCancelButton: false
      // }).then(() => {
      //   window.location.href = "./login.html?url=" + encodeURIComponent(window.location.href)
      // }).catch(() => {
      //   window.location.href = "./login.html?url=" + encodeURIComponent(window.location.href)
      // });
    }
  }
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
