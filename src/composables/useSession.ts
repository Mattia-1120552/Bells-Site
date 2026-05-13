import { useAuthStore } from '@/stores/authStore'

export function useSession() {
  const authStore = useAuthStore()

  return {
    session: authStore.session,
    isLoggedIn: authStore.isLoggedIn,
    user: authStore.user,
  }
}
