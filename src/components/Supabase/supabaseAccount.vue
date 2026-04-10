<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { onMounted, ref, toRefs } from 'vue'
import type { Session } from '@supabase/supabase-js'

const props = defineProps<{
  session: Session | null
}>()

const { session } = toRefs(props)

const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_url = ref('')

onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    loading.value = true

    if (!session.value) return
    const user = session.value.user

    const { data, error, status } = await supabase
      .from('profiles')
      .select('username, website, avatar_url')
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      website.value = data.website
      avatar_url.value = data.avatar_url
    }
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}

async function updateProfile() {
  try {
    loading.value = true

    if (!session.value) return
    const user = session.value.user

    const updates = {
      id: user.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_url.value,
      updated_at: new Date(),
    }

    const { error } = await supabase.from('profiles').upsert(updates)
    if (error) throw error
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="card-about p-8 w-150 h-75 flex flex-col gap-6">
    <form class="form-widget flex flex-col gap-4" @submit.prevent="updateProfile">

      <!-- Email -->
      <div class="flex flex-col gap-1">
        <label for="email" class="text-sm opacity-70">Email</label>
        <input
          id="email"
          type="text"
          :value="session?.user?.email"
          disabled
          class="px-3 py-2 rounded-lg border border-white/20 bg-white/10 opacity-60 cursor-not-allowed w-full"
        />
      </div>

      <!-- Sign out button -->
      <div class="pt-2">
        <button class="button w-full" @click="signOut" :disabled="loading">
          Sign Out
        </button>
      </div>

    </form>
  </div>
</template>

<style scoped>
.form-widget {
  max-width: 400px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input[type='text'],
input[type='url'] {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}
</style>
