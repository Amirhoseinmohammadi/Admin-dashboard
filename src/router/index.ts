import { createRouter, createWebHistory } from 'vue-router'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component:() => import('../views/HomePage.vue'),
    },
    {
      path: '/dashboard',
      component: () => import('../views/DashboardPage.vue'),
    },
    {
      path: '/contact',
      component: () => import('../views/SiginPage.vue'),
    },
    {
        path: '/users',
        component: () => import('../views/UserPage.vue'),
      },
  ],
})