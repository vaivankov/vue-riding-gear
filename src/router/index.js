import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import authGuard from "./auth-guard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/ad/:id',
    name: 'ad',
    props: true,
    component: () => import('@/components/Ads/Ad')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/components/Ads/AdList'),
    beforeEnter: authGuard
  },
  {
    path: '/new',
    name: 'newAd',
    component: () => import('@/components/Ads/NewAd'),
    beforeEnter: authGuard
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Auth/Login')
  },
  {
    path: '/registration',
    name: 'reg',
    component: () => import('@/components/Auth/Registration')
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('@/components/User/Orders'),
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
