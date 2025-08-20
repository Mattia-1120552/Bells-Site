<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { icon: 'pi pi-home' },
  { icon: 'pi pi-home' },
  { icon: 'pi pi-home' },
  { icon: 'pi pi-home' },
  { icon: 'pi pi-home' },
  { icon: 'pi pi-home' },
  { icon: 'pi pi-home' },
  { icon: 'pi pi-home' },
  { icon: 'pi pi-home' },
])
</script>

<template>
  <div class="parent">
    <div v-for="gridItem in items" :key="gridItem.icon" :value="gridItem">
      <i :class="gridItem.icon" style="font-size: 4.2rem"></i>
    </div>
  </div>
</template>

<style>
.parent {
  padding-top: 1em;
  display: grid;
  grid-template-columns: repeat(3, 5rem);
  grid-template-rows: repeat(3, 5rem);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
}
</style>
