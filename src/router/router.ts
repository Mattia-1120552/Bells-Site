import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Ｏ(≧∇≦)Ｏ ~ Welcome to my site! ' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'My About page!' },
    },
    {
      path: '/social',
      name: 'social',
      component: () => import('../views/SocialView.vue'),
      meta: { title: 'My Social page!' },
    },
  ],
})

export default router
