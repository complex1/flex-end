import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/user-velidate',
    name: 'UserValidate',
    component: () => import(/* webpackChunkName: "user-velidate" */ '../views/UserValidate.vue')
  },
  {
    path: '/update-password',
    name: 'UpdatePassword',
    component: () => import(/* webpackChunkName: "update-password" */ '../views/UpdatePassword.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
