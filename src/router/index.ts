import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Index } from '@/views/Index'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
