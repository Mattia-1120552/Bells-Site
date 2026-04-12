import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { supabase } from '@/lib/supabaseClient'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'O(≧∇≦)O ~ Welcome to my site!', description: 'FROGS' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'My About page!', description: 'FROGS' },
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue'),
      meta: { title: 'List page!', description: 'FROGS', requiresAuth: true },
    },
    {
      path: '/Account',
      name: 'Account',
      component: () => import('../views/AccountView.vue'),
      meta: { title: 'My Account page!', description: 'FROGS' },
    },
  ],
})

// authentication
router.beforeEach(async (to) => {
  if (!to.meta.requiresAuth) return true

  const { data } = await supabase.auth.getSession()
  if (data.session) return true
  // redirect
  return { name: 'home' }
})

export default router
