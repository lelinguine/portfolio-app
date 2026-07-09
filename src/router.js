import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/app/'),
  routes: [
    {
      path: '/',
      component: () => import('./main.vue'),
    },
  ],
})

export default router
