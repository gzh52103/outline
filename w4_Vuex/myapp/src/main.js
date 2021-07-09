import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant,{Toast,Dialog} from 'vant';
import request,{baseUrl} from './utils/request'

import 'vant/lib/index.css';

Vue.prototype.$request = request;
Vue.prototype.$baseUrl = baseUrl
Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;
Vue.config.productionTip = false
Vue.use(Vant);

new Vue({
  // 4. 把router实例注入到vue实例中
  router,
  // 4. 把store注入到根实例中
  store,
  // 依赖注入
  // 父组件共享数据
  provide:{
    username:'tiantian'
  },
  // provide(){
  //   return {

  //   }
  // },
  render: h => h(App),
}).$mount('#app')
