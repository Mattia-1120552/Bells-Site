import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useToastStore } from './toastStore'
import { supabase } from '@/lib/supabaseClient'
import type { Session } from '@supabase/supabase-js'

export const useAuthStore = defineStore('auth', () => {
  const { showToast } = useToastStore()
  const session = ref<Session | null>(null)
  const loading = ref(false)

  const isLoggedIn = computed(() => session.value !== null)
  const user = computed(() => session.value?.user || null)

  // Initialize auth and listen for changes
  const initializeAuth = async () => {
    try {
      const { data } = await supabase.auth.getSession()
      session.value = data.session
      showToast('success', 'Connected', 'Successfully connected to Supabase')
    } catch (error) {
      console.error('Failed to get session:', error)
      showToast('error', 'Connection Error', 'Failed to connect to Supabase')
    }

    // Listen to auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, newSession) => {
      session.value = newSession
    })

    return subscription
  }

  // Auth methods
  const signUp = async (email: string, password: string) => {
    try {
      loading.value = true
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      return data
    } finally {
      loading.value = false
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      loading.value = true
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      session.value = data.session
      return data
    } finally {
      loading.value = false
    }
  }

  const signOut = async () => {
    try {
      loading.value = true
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      session.value = null
    } finally {
      loading.value = false
    }
  }

  return {
    session,
    isLoggedIn,
    user,
    loading,
    initializeAuth,
    signUp,
    signIn,
    signOut,
  }
})
