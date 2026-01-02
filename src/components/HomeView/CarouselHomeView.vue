<template>
  <div class="card">
    <div v-if="loading" class="flex justify-center items-center h-64 flex-col-reverse gap-10">
      ~Loading froggits~
      <ProgressSpinner />
    </div>
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
import { onMounted, ref } from 'vue'
import { getMessage } from '@/scripts/api/fetch'

interface Product {
  id: string
  name: string
  image: string
}

const products = ref<Product[]>([])
const loading = ref(true)
const apiFailed = ref(false)

onMounted(async () => {
  try {
    const data: Product[] = await getMessage()

    if (!data.length) {
      throw new Error('Empty response')
    }

    products.value = data
  } catch (error) {
    console.error(error)
    apiFailed.value = true
    products.value = fallbackProducts
  } finally {
    loading.value = false
  }
})

const fallbackProducts = [
  {
    id: 'fallback-1',
    name: 'fallback Froggit 1',
    image: '/fallback/drawings/cat1.png',
  },
  {
    id: 'fallback-2',
    name: 'fallback Froggit 2',
    image: '/fallback/drawings/cat2.png',
  },
  {
    id: 'fallback-3',
    name: 'fallback Froggit 3',
    image: '/fallback/drawings/cat3.png',
  },
  {
    id: 'fallback-4',
    name: 'fallback Froggit 4',
    image: '/fallback/drawings/cat4.png',
  },
]
</script>
