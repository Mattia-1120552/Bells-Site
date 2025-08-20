<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuNavigation from './components/MenuNavigation.vue'
import { ref } from 'vue'
import MainHeader from './components/MainHeader.vue'

const visible = ref(false)
</script>

<template>
  <header>
    <MainHeader />
  </header>

  <div class="border">
    <RouterView />
  </div>

  <div class="navigationButton">
    <Button icon="pi pi-compass" @click="visible = true" />
  </div>

  <Drawer v-model:visible="visible" header="Navigation">
    <MenuNavigation />
  </Drawer>
</template>

<style scoped>
.navigationButton {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1.5rem;
}

.border {
  border: 1px solid black;
  padding: 1em;
}

header {
  background-color: black;
  filter: opacity(0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
}
</style>
