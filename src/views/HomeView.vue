<script setup lang="ts">
import CardHomeView from './CardHomeView.vue'
import CarouselHomeView from './CarouselHomeView.vue'
</script>

<template>
  <div class="flex" style="overflow: hidden">
    <div class="frog w-[55%]">
      <CardHomeView />
    </div>
    <div class="frog w-[5%]">frogs</div>
    <div class="frog w-[40%]">
      <CarouselHomeView />
    </div>
  </div>
</template>

<style scoped>
.frog {
  /* border: 1px solid black; */
  margin: 0 1em 0 1em;
}
</style>
