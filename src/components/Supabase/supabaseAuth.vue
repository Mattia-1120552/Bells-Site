<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
    })
    if (error) throw error
    alert('Check your email for the login link!')
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
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div v-focustrap class="w-full sm:w-80 flex flex-col gap-6">
      <IconField>
        <InputIcon>
          <i class="pi pi-envelope" />
        </InputIcon>
        <InputText
          required
          id="email"
          v-model="email"
          type="email"
          placeholder="Your Email"
          fluid
        />
      </IconField>

      <Button
        type="submit"
        label="Submit"
        class="mt-2"
        :value="loading ? 'Loading' : 'Send magic link'"
        :disabled="loading"
      />
    </div>
  </form>
</template>
