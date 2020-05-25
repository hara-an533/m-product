import Vue from 'vue';
import router from './router'
import App from './App.vue';
//引入饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入全局css样式
import global from "./assets/css/global.css"
//引入字体图标样式
import './assets/font/iconfont.css'

//引入axios
// import axios from "axios"
//将axios注入原型链
// Vue.prototype.$http=axios
// axios.defaults.baseURL="http://localhost:3030/api"
import axios from './utils/axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});


