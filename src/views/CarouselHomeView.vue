<template>
  <div class="card">
    <Carousel
      :value="products"
      :numVisible="1"
      :numScroll="1"
      orientation="vertical"
      verticalViewPortHeight="27vw"
    >
      <template #item="slotProps">
        <div class="border rounded-xl m-2 p-4 h-[100%] flex justify-between flex-col">
          <div class="mb-4">
            <div class="relative mx-auto">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
              <Tag
                :value="slotProps.data.id"
                class="absolute"
                style="left: 5px; top: 5px; color: #000"
              />
            </div>
          </div>
          <div class="flex justify-between items-center pt-3">
            <div class="mt-0 font-semibold text-xl">(≧ω≦) {{ slotProps.data.name }}</div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const products = ref([
  {
    id: '1000',
    name: 'City Scape',
    image: '/banner2.jpg',
  },
  {
    id: '1001',
    name: 'Gaming Keyboard',
    image: '/banner3.jpg',
  },
])
</script>
