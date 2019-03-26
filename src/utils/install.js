import axios from 'axios';
import Vue from 'vue';
import obj  from "@/utils"
export default {
	install: function(Vue, options) {
		Vue.prototype.$notice = function(msg, duration) {
			var messages = document.querySelectorAll(".el-message");
			if (messages) {
				messages.forEach(message => {
					document.body.removeChild(message)
				});
			}
			this.$message({
				message: msg,
				duration: duration || 2500
			})
		};
		Vue.prototype.$axios = axios;
    Vue.prototype.baseUtils=obj;
		Vue.prototype.$warning = function() {
			this.$alert('由于您长时间未操作，系统已自动退出，请重新登录', '提示', {
				confirmButtonText: '确定',
				showCancelButton: false,
				callback: action => {
					window.location.href = "./login.html?url=" + encodeURIComponent(window.location.href)
				}
			});
		};
		Vue.prototype.historyGoBack = function(path) {
			if (typeof path === 'number') {
				path = 'index'
			}
			this.$router.push({
				path: path
			})
		};
    Vue.prototype.removeNullKey=function(obj,returnVal = 'obj'){
      let param = {}
      for (let key in obj) {
        if (obj[key]) {
          if(returnVal=='obj'){
            param[key]=obj[key]
          }else if(returnVal=='str'){
            param += key + ':' + obj[key] + ','
          }
        }
      }
      return param
    }
	}
}
