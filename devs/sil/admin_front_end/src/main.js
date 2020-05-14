import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './_store'
import axios from 'axios'
import VueSwal from 'vue-swal'
import Paginate from 'vuejs-paginate'

Vue.component('paginate', Paginate)

Vue.use(VueSwal);

Vue.config.productionTip = false

axios.defaults.baseURL = "http://34.87.12.64:9000";
// axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
