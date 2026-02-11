<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import type { Session } from '@supabase/supabase-js'

const session = ref<Session | null>(null)

// Provide the session to children
provide('session', session)

// Load initial session
onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  // Listen to auth state changes
  supabase.auth.onAuthStateChange((_, newSession) => {
    session.value = newSession
  })
})
</script>

<template>
  <!-- slot passes through everything inside -->
  <slot />
</template>
