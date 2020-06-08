import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '../layout/index.vue'

Vue.use(VueRouter)

export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard'
        }
      }
    ]
  },
  {
    path: '/business',
    component: Layout,
    redirect: '/business/test',
    children: [
      {
        path: 'test',
        component: () => import(/* webpackChunkName: "profile" */ '@/views/business/test.vue'),
        name: 'test',
        meta: {
          title: '个人中心',
          icon: 'user',
          noCache: true
        }
      },
      {
        path: 'test2',
        component: () => import(/* webpackChunkName: "profile" */ '@/views/business/test2.vue'),
        name: 'test2',
        meta: {
          title: '业务组合计啊',
          icon: 'user',
          noCache: true
        }
      }
    ]
  }
]
export const asyncRoutes: RouteConfig[] = [
  {
    path: '/help-center',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "helpCenter" */ '@/views/business/test2.vue'),
        name: 'help-center',
        meta: {
          title: 'helpCenter',
          icon: 'icon',
          noCache: true
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    meta: { hidden: true }
  }
]

const createRouter = () =>
  new VueRouter({
    // scrollBehavior功能只在 HTML5 history 模式下可用，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样
    // mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        // 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    routes: constantRoutes
  })

const router = createRouter()

export default router
