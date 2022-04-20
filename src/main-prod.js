import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入element-ui,全局导入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
// 部分导入element-ui
// import './plugins/element.js'

// 导入全局样式表
import './assets/css/global.css'


// 导入字体图标
import './assets/fonts/iconfont.css'

import ZkTable from 'vue-table-with-tree-grid'
Vue.use(ZkTable)

// 导入 NProgress 包对应的JS和CSS
// import NProgress from 'nprogress'

// 配置axios
import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// $是在 Vue 所有实例中都可用的属性的一个简单约定。这样做会避免和已被定义的数据、方法、计算属性产生冲突。
// 通过在原型上定义它们使其在每个Vue实例中可用。
Vue.prototype.$http = axios
// 在 request 拦截器中，展示进度条 NProgress.start()
axios.interceptors.request.use(config => {
  // console.log(config)
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
// 在 response 拦截器中，隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})


// 引入Quill
import VueQuillEditor from 'vue-quill-editor'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
// 将富文本编辑器，注册为全局可用的组件
Vue.use(VueQuillEditor)



Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
