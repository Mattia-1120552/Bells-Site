<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { onMounted, ref } from 'vue'

type Frog = {
  id: number
  title: string
  description: string
}

const frogs = ref<Frog[]>([])

async function getFrogs() {
  const { data, error } = await supabase.from('frogs').select()

  if (error) {
    console.error(error)
    return
  }
  if (data) {
    frogs.value = data
  }
}

onMounted(() => {
  getFrogs()
})
</script>
<template>
  <div>
    <h1>This is a AboutView</h1>
    <!-- <Button @onclick="Home">frog button</Button> -->
    <li v-for="frog in frogs" :key="frog.id">{{ frog.title }}, {{ frog.description }}</li>
  </div>
</template>
