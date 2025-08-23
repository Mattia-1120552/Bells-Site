<script setup lang="ts">
import CardHomeView from '@/components/HomeView/CardHomeView.vue'
import CarouselHomeView from '@/components/HomeView/CarouselHomeView.vue'
</script>

<template>
  <div class="maindev flex items-center flex-col md:flex-row" style="overflow: hidden">
    <div
      class="frog1 w-[70%] lg:w-[50%] h-[30vh] lg:h-[60vh] border-8 rounded-2xl p-3 bg-[#333333]"
    >
      <CardHomeView />
    </div>
    <div class="frog2 lg:w-[10%] h-[2em] lg:h-[25px]"></div>
    <div class="frog w-[90%] sm:w-[60%] lg:w-[40%]">
      <CarouselHomeView />
    </div>
  </div>
</template>
