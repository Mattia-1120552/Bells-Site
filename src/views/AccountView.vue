<script setup lang="ts">
import { useSession } from '@/composables/useSession'
import SupabaseAccount from '@/components/Supabase/supabaseAccount.vue'
import SupabaseAuth from '@/components/Supabase/supabaseAuth.vue'

const { isLoggedIn } = useSession()
</script>

<template>
  <div>
    <SupabaseAuth v-if="!isLoggedIn" />
    <SupabaseAccount v-else />
  </div>
</template>
