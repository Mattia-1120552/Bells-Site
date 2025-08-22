<script setup lang="ts">
import { updatePrimaryPalette } from '@primeuix/themes'
import { ref, watch } from 'vue'

const selectedColor = ref(localStorage.getItem('selectedColor') || null)

function switchColor() {
  const color = selectedColor.value
  if (!color) return
  console.log('Palette updated:', color)
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
</script>

<template>
  <div class="flex items-center flex-col">
    <h2>Settings</h2>
    <Select
      v-model="selectedColor"
      :options="colors"
      option-value="value"
      optionLabel="label"
      placeholder="Select a color"
    />
    <br />
    <div class="theme-color">( ◥◣_◢◤ )</div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.3rem;
}
</style>
