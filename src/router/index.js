import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import WordManagement from '@/views/WordManagement.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/word',
    name: 'word-management',
    component: WordManagement
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

export default router
