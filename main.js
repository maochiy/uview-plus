import App from './App'

// vuex
import store from './store'

// 引入全局uview-plus
import uviewPlus from './uni_modules/uview-plus/index.js'

//import mixin from './common/mixin'

// #ifdef MP
// 引入uView对小程序分享的mixin封装
// const mpShare = require('@/uni_modules/uview-ui/libs/mixin/mpShare.js')
// Vue.mixin(mpShare)
// Vue.mixin(mixin)
// #endif
  
// #ifdef VUE3
import { createSSRApp } from 'vue'
import {initRequest} from './util/request/index'
export function createApp() {
  const app = createSSRApp(App)
  
  // 引入请求封装
  initRequest(app)

  app.use(store)
	.use(uviewPlus)
  return {
    app
  }
}
// #endif




