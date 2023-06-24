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
    path: '/colors',
    name: 'Colors',
    component: () => import(/* webpackChunkName: "colors" */ '../views/Colors.vue')
  },
  {
    path: '/shadow',
    name: 'Shadow',
    component: () => import(/* webpackChunkName: "shadow" */ '../views/Shadow.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import(/* webpackChunkName: "button" */ '../views/Button.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import(/* webpackChunkName: "input" */ '../views/Input.vue')
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
    component: () => import(/* webpackChunkName: "tooltip" */ '../views/Tooltip.vue')
  },
  {
    path: '/popover',
    name: 'Popover',
    component: () => import(/* webpackChunkName: "popover" */ '../views/Popover.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
