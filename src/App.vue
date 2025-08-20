<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import WelcomeHeader from './components/WelcomeHeader.vue'
import RootSideBar from './components/SideBar/RootSideBar.vue'

const visible = ref(false)
</script>

<template>
  <div class="background"></div>
  <div class="outerlayer h-[100vh]">
    <header>
      <header
        class="theme-color opacity-30 absolute top-0 left-0 w-[100vw] flex justify-center items-center h-[75px] hover:opacity-100 transition duration-1000 z-20 bg-black"
      >
        <WelcomeHeader />
      </header>
      <div
        class="w-full h-20 bg-cover bg-center z-[-1]"
        style="background-image: url('/banner2.jpg')"
      ></div>
    </header>

    <div class="theme-color View justify-center bg-black">
      <!--Waves Container-->
      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255, 105, 180, 0.7)" />
            <!-- Hot pink -->
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255, 182, 193, 0.5)" />
            <!-- Light pink -->
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255, 192, 203, 0.3)" />
          </g>
        </svg>
      </div>
      <!--Waves end-->
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
