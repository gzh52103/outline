import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant,{Toast} from 'vant';
import request,{baseUrl} from './utils/request'

import 'vant/lib/index.css';

Vue.prototype.$request = request;
Vue.prototype.$baseUrl = baseUrl
Vue.prototype.$toast = Toast;
Vue.config.productionTip = false
Vue.use(Vant);

new Vue({
  // 4. 把router实例注入到vue实例中
  router,
  render: h => h(App),
}).$mount('#app')
