<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const loading = ref(false)
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    if (error) throw error
  } catch (error) {
    if (error instanceof Error) alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div v-focustrap class="w-full sm:w-80 flex flex-col gap-6">
      <IconField>
        <InputIcon><i class="pi pi-envelope" /></InputIcon>
        <InputText required v-model="email" type="email" placeholder="Email" fluid />
      </IconField>

      <IconField>
        <InputIcon><i class="pi pi-lock" /></InputIcon>
        <InputText required v-model="password" type="password" placeholder="Password" fluid />
      </IconField>

      <Button type="submit" label="Login" class="mt-2" :disabled="loading" />
    </div>
  </form>
</template>
