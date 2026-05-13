<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    await authStore.signIn(email.value, password.value)
  } catch (error) {
    if (error instanceof Error) alert(error.message)
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

      <Button type="submit" label="Login" class="mt-2" :disabled="authStore.loading" />
    </div>
  </form>
</template>
