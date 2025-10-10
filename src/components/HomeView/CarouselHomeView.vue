<template>
  <div class="card">
    <div v-if="loading" class="flex justify-center items-center h-64 flex-col-reverse gap-10">
      ~Loading froggits~
      <ProgressSpinner />
    </div>
    <Carousel
      v-else
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

const products = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const data = await getMessage()
    products.value = data
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>
