<script setup lang="ts">
import { updatePrimaryPalette } from '@primeuix/themes'
import { onMounted, ref } from 'vue'

const selectedColor = ref(localStorage.getItem('selectedColor') || null)
onMounted(() => {
  if (selectedColor.value) {
    switchColor()
  }
})

function switchColor() {
  const color = selectedColor.value
  if (!color) return
  document.body.style.backgroundImage = `url(/background-theme/background-${color}.jpg)`

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
</script>
