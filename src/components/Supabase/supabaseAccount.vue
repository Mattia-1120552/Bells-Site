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
    // Handle unknown error type safely
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
  <form class="form-widget" @submit.prevent="updateProfile">
    <!-- Email (read-only) -->
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="session?.user?.email" disabled />
    </div>

    <!-- Username -->
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" />
    </div>

    <!-- Website -->
    <div>
      <label for="website">Website</label>
      <input id="website" type="url" v-model="website" />
    </div>

    <!-- Update button -->
    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <!-- Sign out button -->
    <div>
      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>
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

.button {
  padding: 0.5rem;
  cursor: pointer;
}

.button.primary {
  background-color: #4f46e5;
  color: white;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
