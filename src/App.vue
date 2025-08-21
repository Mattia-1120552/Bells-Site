<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import WelcomeHeader from './components/WelcomeHeader.vue'
import RootSideBar from './components/SideBar/RootSideBar.vue'
import WavesHeader from './components/WavesHeader.vue'

const visible = ref(false)
</script>

<template>
  <div class="outerlayerBottomRight h-[100vh]">
    <header>
      <WelcomeHeader />
    </header>

    <WavesHeader />

    <div class="p-10 sm:px-[5rem] lg:px-[20rem] w-[100vw] h-[66vh]">
      <div class="h-[100%] rounded-xs">
        <RouterView />
      </div>
    </div>

    <div class="navigationButton fixed bottom-0 right-0 p-[1.5rem]">
      <Button icon="pi pi-compass" @click="visible = true" />
    </div>

    <Drawer v-model:visible="visible" header="‎ ‎ ‎ ‎ ‎ SideBar (つ﹏ <。)">
      <template #header> </template>
      <RootSideBar />
      <template #footer>
        <SettingsSideBar />
      </template>
    </Drawer>
  </div>
</template>

<style scoped></style>
