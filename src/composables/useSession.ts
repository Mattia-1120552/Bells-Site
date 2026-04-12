import { inject, computed } from 'vue'
import type { Ref } from 'vue'
import type { Session } from '@supabase/supabase-js'

export function useSession() {
  const session = inject<Ref<Session | null>>('session')
  if (!session) throw new Error('GlobalLogin provider missing!')

  return {
    session: computed(() => session.value),
    isLoggedIn: computed(() => session.value !== null),
  }
}
