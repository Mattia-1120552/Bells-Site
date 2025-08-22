<template>
  <div class="card">
    <Carousel
      :value="products"
      :numVisible="1"
      :numScroll="1"
      orientation="horizontal"
      verticalViewPortHeight="27vw"
      circular
      :autoplayInterval="3000"
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
    name: 'Kitty art',
    image: '/drawings/cat1.png',
  },
  {
    id: '1001',
    name: 'Kitty art',
    image: '/drawings/cat2.png',
  },
  {
    id: '1002',
    name: 'Boy art',
    image: '/drawings/cat3.png',
  },
  {
    id: '1003',
    name: 'Boy art',
    image: '/drawings/cat4.png',
  },
])
</script>
