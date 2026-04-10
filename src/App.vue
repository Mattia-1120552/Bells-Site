<template>
  <GlobalLogin>
    <div class="outerlayerBottomRight h-[100vh]">
      <header>
        <WelcomeHeader />
      </header>
      <WavesHeader />

      <!-- app page -->
      <div class="p-10 sm:px-[5rem] lg:px-[10rem] w-[100vw] sm:h-[76vh] h-[66vh]">
        <div class="h-full w-full flex justify-center">
          <RouterView v-slot="{ Component }">
            <!-- View -->
            <Transition name="slide-up" mode="out-in">
              <component :is="Component" />
            </Transition>
          </RouterView>
        </div>
      </div>

      <div class="fixed bottom-0 right-0 p-[1.4rem]">
        <Button icon="pi pi-compass" @click="visible = true" />
      </div>

      <Drawer v-model:visible="visible" position="right" header="SideBar (つ﹏ <。)">
        <RootSideBar />
        <template #footer>
          <SettingsSideBar />
        </template>
      </Drawer>

      <ColorWatcher />
    </div>
  </GlobalLogin>
</template>

<script setup lang="ts">
import GlobalLogin from '@/components/Global/supabaseLogin.vue'
import { ref } from 'vue'
import WelcomeHeader from '@/components/Header/WelcomeHeader.vue'
import WavesHeader from '@/components/Header/WavesHeader.vue'
import RootSideBar from '@/components/SideBar/RootSideBar.vue'
import SettingsSideBar from '@/components/SideBar/SettingsSideBar.vue'
import ColorWatcher from '@/components/Global/ColorWatcher.vue'

const visible = ref(false)
</script>
