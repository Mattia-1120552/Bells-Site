<script setup lang="ts">
import { inject, type Ref } from 'vue'
import type { Session } from '@supabase/supabase-js'
import SupabaseAccount from '@/components/Supabase/supabaseAccount.vue'
import SupabaseAuth from '@/components/Supabase/supabaseAuth.vue'

const session = inject<Ref<Session | null>>('session')

if (!session) throw new Error('GlobalLogin provider missing!')

import { computed } from 'vue'
const currentSession = computed(() => session.value)
</script>

<template>
  <div>
    <!-- Show Auth if not logged in -->
    <SupabaseAuth v-if="!currentSession" />

    <!-- Show Account if logged in -->
    <SupabaseAccount v-else :session="currentSession" />
  </div>
</template>
