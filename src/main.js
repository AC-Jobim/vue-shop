import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入element-ui,全局导入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 部分导入element-ui
// import './plugins/element.js'

// 导入全局样式表
import './assets/css/global.css'


// 导入字体图标
import './assets/fonts/iconfont.css'



// 配置axios
import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// $是在 Vue 所有实例中都可用的属性的一个简单约定。这样做会避免和已被定义的数据、方法、计算属性产生冲突。
// 通过在原型上定义它们使其在每个Vue实例中可用。
Vue.prototype.$http = axios

Vue.config.productionTip = false




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
