import Vue from 'vue'
import App from './App.vue'
import store from './store'

import '@/assets/style/index.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#root')
