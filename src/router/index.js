import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import WordManagement from '@/views/WordManagement.vue'
import Login from '@/views/Login.vue'
import firebase from '@/plugins/firebase'
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: '/word',
    name: 'word-management',
    component: WordManagement,
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    props: true,
    meta: {
      loginLayout: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    firebase.auth().onAuthStateChanged(async user => {
      if (store.getters['auth/getAccount']) {
        next()
      } else {
        try {
          const token = await user.getIdToken()
          store.dispatch('auth/loginWithToken', token)
          next()
        } catch (e) {
          next('/login')
        }
      }
    })
  } else {
    next()
  }
})

export default router
