import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import axios from 'axios';

import 'vant/lib/index.css';

Vue.prototype.$axios = axios;
Vue.prototype.$baseUrl = 'http://120.76.247.5:2003'
Vue.config.productionTip = false
Vue.use(Vant);

new Vue({
  // 4. 把router实例注入到vue实例中
  router,
  render: h => h(App),
}).$mount('#app')
