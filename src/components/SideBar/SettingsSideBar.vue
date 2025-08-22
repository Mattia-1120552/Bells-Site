<script setup lang="ts">
import { updatePrimaryPalette } from '@primeuix/themes'
import { ref } from 'vue'

const selectedColor = ref('Green') // This can be dynamically changed

function switchColor() {
  const color = selectedColor.value
  // console.log('Palette updated:', color)
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
</script>
<template>
  <div class="flex items-center flex-col">
    <h1>Settings</h1>
    <div>Background Changer</div>
    <div>Theme Color</div>
    <Button @click="switchColor">Swap color</Button>

    <!-- Example: change color dynamically -->
    <select v-model="selectedColor">
      <option value="Green">Green</option>
      <option value="Blue">Blue</option>
      <option value="Red">Red</option>
      <option value="Purple">Purple</option>
    </select>

    <div class="theme-color">( ◥◣_◢◤ )</div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.3rem;
}
</style>
