<script setup lang="ts">
import { useRoute } from 'vue-router'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import WelcomeHeader from './components/WelcomeHeader.vue'
import RootSideBar from './components/SideBar/RootSideBar.vue'

const route = useRoute()
const visible = ref(false)
</script>

<template>
  <div class="backgroundcolorApp">
    <header>
      <div
        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 z-30"
      ></div>

      <header
        class="theme-color opacity-30 absolute top-0 left-0 w-[100vw] flex justify-center items-center h-[75px] hover:opacity-100 transition duration-1000 z-20 bg-black"
      >
        <WelcomeHeader />
      </header>
      <div
        class="w-full h-30 md:h-70 bg-cover bg-center z-[-1]"
        style="background-image: url('/banner.jpg')"
      ></div>
    </header>

    <div
      class="absolute w-full h-2 z-30 bg-gradient-to-b from-indigo-500/100 via-pink-500/50 to-purple-500/20"
    ></div>

    <div class="theme-color View p-[1.5rem] flex justify-center bg-black">
      <h1>{{ route.meta.title }}View</h1>
    </div>

    <div class="p-10 px-[20rem] w-[100vw] h-[66vh]">
      <div class="h-[100%] rounded-xs">
        <RouterView />
      </div>
    </div>

    <div class="navigationButton">
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

<style scoped>
.navigationButton {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1.5rem;
}
</style>
