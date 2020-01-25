import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import firebase from '@/plugins/firebase'

import '@/assets/style/index.css'

// Font-Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUsersCog,
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import { faElementor } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUsersCog, faElementor, faArrowLeft, faArrowRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

firebase.auth().setPersistence('session')

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#root')
