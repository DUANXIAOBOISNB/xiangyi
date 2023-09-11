import App from './App'
import store from './store/store.js'
import { $http } from '@escook/request-miniprogram'
// #ifndef VUE3
import Vue from 'vue'
Vue.prototype.$imgUrl = 'https://file-resource-1312729391.cos.ap-guangzhou.myqcloud.com/'

Vue.config.productionTip = false
App.mpType = 'app'
$http.baseURL='http://127.0.0.1:8025/'
uni.$http=$http
uni.$showmsg=function(title = '数据加载失败！', duration = 1500)
{ 
uni.showToast({ 
	              title: '数据请求失败！',
	              duration: 1500,
	              icon: 'none',
	            })
}

$http.beforeRequest=function(options)
{
	uni.showLoading({
	  title: '数据加载中...',
	})
}
$http.afterRequest = function () {
  uni.hideLoading()
}
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
    app.config.globalProperties.$imgUrl = 'https://file-resource-1312729391.cos.ap-guangzhou.myqcloud.com/'
  return {
    app
  }
}
// #endif