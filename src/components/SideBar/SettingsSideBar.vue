<script setup lang="ts">
import { updatePrimaryPalette } from '@primeuix/themes'
import { ref, watch, computed } from 'vue'
import { inject, type Ref } from 'vue'
import type { Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabaseClient'

// --- Session injection ---
const session = inject<Ref<Session | null>>('session')
if (!session) throw new Error('GlobalLogin provider missing!')

// Computed unwraps the session Ref for template
const currentSession = computed(() => session.value)

// --- Theme color state ---
const selectedColor = ref(localStorage.getItem('selectedColor') || null)

function switchColor() {
  const color = selectedColor.value
  document.body.style.backgroundImage = `url(/background-theme/background-${color}.jpg)`
  updatePrimaryPalette({
    50: `{${color}.50}`,
    100: `{${color}.100}`,
    200: `{${color}.200}`,
    300: `{${color}.300}`,
    400: `{${color}.400}`,
    500: `{${color}.500}`,
    600: `{${color}.600}`,
    700: `{${color}.700}`,
    800: `{${color}.800}`,
    900: `{${color}.900}`,
    950: `{${color}.950}`,
  })
}

const colors = [
  { label: 'Gray', value: 'Gray' },
  { label: 'Pink', value: 'Pink' },
  { label: 'Green', value: 'Green' },
  { label: 'Blue', value: 'Blue' },
  { label: 'Red', value: 'Red' },
  { label: 'Purple', value: 'Purple' },
]

watch(selectedColor, (newValue) => {
  if (!newValue) return
  localStorage.setItem('selectedColor', newValue)
  switchColor()
})

// --- ✨ Sign out function ---
async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error

    // Non-null assertion since session is guaranteed to exist
    session!.value = null
  } catch (error) {
    if (error instanceof Error) alert(error.message)
  }
}
</script>

<template>
  <div class="flex items-center flex-col">
    <h1>Settings</h1>

    <!-- Login / Account toggle -->
    <nav class="p-5 flex flex-col items-center">
      <div v-if="!currentSession">
        <RouterLink to="/account">Login</RouterLink>
      </div>

      <div v-else class="flex flex-col items-center gap-5">
        <RouterLink to="/account">Account</RouterLink>
        <button class="transition-transform duration-200 hover:scale-110" @click="signOut">
          Sign out
        </button>
      </div>
    </nav>

    <!-- Theme selector -->
    <Select
      v-model="selectedColor"
      :options="colors"
      option-value="value"
      optionLabel="label"
      placeholder="Select a color"
      class="w-50"
    />

    <div class="mt-4 theme-color">( ◥◣_◢◤ )</div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.3rem;
}
</style>
