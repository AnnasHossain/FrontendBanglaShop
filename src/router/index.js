import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DamenView from '../views/DamenView.vue'
import HerrenView from '../views/HerrenView.vue'
import LikeView from '@/views/LikeView.vue'
import WarenkorbView from '@/views/WarenkorbView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/damen',
    name: 'damen',
    component: DamenView
  },
  {
    path: '/herren',
    name: 'herren',
    component: HerrenView
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: () => import('../views/KontaktView.vue')
  },
  {
    path: '/likes',
    name: 'likes',
    component: LikeView
  },
  {
    path: '/warenkorb',
    name: 'warenkorb',
    component: WarenkorbView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
