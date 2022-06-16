/*
 * @Author       : YH000354
 * @Date         : 2022-03-30 18:34:21
 * @LastEditors  : YH000354
 * @LastEditTime : 2022-06-16 09:24:57
 * @FilePath     : \warmletheret_website\src\router\index.ts
 */
import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: _ => {
      return { path: '/home' }
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
    redirect: _ => {
      return { path: '/' }
    },
  },
]
const router = createRouter({
  // history: createWebHashHistory('/warmletheret'),
  // history: createWebHashHistory('/'),
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})
export default router
