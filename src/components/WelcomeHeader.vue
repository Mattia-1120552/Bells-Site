<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header
    class="theme-color opacity-50 absolute top-0 left-0 w-[100vw] flex justify-center items-center h-[75px] hover:opacity-100 transition duration-1000 z-20 bg-black"
    style="
      /* background-image: url('/banner.jpg'); */
      background-position: center;
      background-size: cover;
    "
  >
    <h1>{{ route.meta.title }}</h1>
  </header>
  <div class="w-full h-20 bg-cover bg-center z-[-1]"></div>
</template>
