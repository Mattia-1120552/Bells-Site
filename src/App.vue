<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

import WelcomeHeader from '@/components/Header/WelcomeHeader.vue'
import WavesHeader from '@/components/Header/WavesHeader.vue'
import RootSideBar from '@/components/SideBar/RootSideBar.vue'
import ColorWatcher from '@/components/Global/ColorWatcher.vue'
import SettingsSideBar from '@/components/SideBar/SettingsSideBar.vue'

const visible = ref(false)
</script>

<template>
  <div class="outerlayerBottomRight h-[100vh]">
    <!-- Header Section -->
    <header>
      <WelcomeHeader />
    </header>
    <WavesHeader />

    <!-- Main Content -->
    <div class="p-10 sm:px-[5rem] lg:px-[10rem] w-[100vw] sm:h-[76vh] h-[66vh]">
      <div class="h-full rounded-xs">
        <RouterView v-slot="{ Component }">
          <Transition name="slide-up" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>

    <!-- Floating Navigation Button -->
    <div class="navigationButton fixed bottom-0 right-0 p-[1.5rem]">
      <Button icon="pi pi-compass" @click="visible = true" />
    </div>

    <!-- Sidebar Drawer -->
    <Drawer v-model:visible="visible" header="SideBar (つ﹏ <。)">
      <RootSideBar />
      <template #footer>
        <SettingsSideBar />
      </template>
    </Drawer>

    <!-- Global Color Watcher -->
    <ColorWatcher />
  </div>
</template>
