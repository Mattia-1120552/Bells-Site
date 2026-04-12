<template>
  <div class="flex flex-row gap-4 justify-center h-[75vh]">
    <!-- Category Buttons -->
    <div class="flex flex-col gap-2">
      <Button
        v-for="category in categories"
        :key="category"
        :label="category"
        raised
        :outlined="activeTable !== category"
        :disabled="activeTable === category"
        @click="activeTable = category"
        style="width: 8rem"
      />
    </div>

    <!-- DataView -->
    <div class="w-[55vw] flex flex-col gap-2">
      <div class="flex justify-end">
        <Select
          v-model="sortOrder"
          :options="sortOptions"
          option-label="label"
          option-value="value"
          placeholder="Sort by status"
        />
      </div>

      <DataView
        :value="products"
        :sort-field="'sortStatus'"
        :sort-order="sortOrder"
        paginator
        :rows="6"
      >
        <template #empty>
          <div class="text-center py-8 opacity-50">No items found.</div>
        </template>

        <template #list="{ items }">
          <div class="grid grid-cols-2 gap-4 p-4">
            <div
              v-for="item in items"
              :key="item.id"
              class="card-about flex flex-col overflow-hidden rounded-lg"
            >
              <a :href="item.link" target="_blank" rel="noopener noreferrer" class="block">
                <img :src="item.img" class="w-full h-40 object-cover" />
              </a>
              <div class="flex items-center justify-between px-3 py-2">
                <span class="font-medium">{{ item.name }}</span>
                <Tag :value="item.status" :severity="getSeverity(item)" class="capitalize" />
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

interface Product {
  id: string
  name: string
  img: string
  link: string
  status: 'good' | 'potential' | 'bad'
  sortStatus: 1 | 2 | 3
}

interface SupabaseItem {
  id: string
  name: string
  img: string
  link: string
  status: Product['status']
  categories: { name: string }
}

const statusOrder: Record<Product['status'], Product['sortStatus']> = {
  good: 1,
  potential: 2,
  bad: 3,
}

const getSeverity = (product: Product) => {
  switch (product.status) {
    case 'good':
      return 'success'
    case 'potential':
      return 'warn'
    case 'bad':
      return 'danger'
  }
}

const sortOrder = ref(1)
const sortOptions = [
  { label: 'Good first', value: 1 },
  { label: 'Bad first', value: -1 },
]

const categories = ref<string[]>(['loading...'])
const activeTable = ref<string>('loading...')
const allItems = ref<Record<string, Product[]>>({ 'loading...': [] })

onMounted(async () => {
  setTimeout(() => {
    if (categories.value[0] === 'loading...') {
      categories.value = categories.value.filter((c) => c !== 'loading...')
      delete allItems.value['loading...']
    }
  }, 500)

  const { data: categoryData, error: categoryError } = await supabase
    .from('categories')
    .select('name')

  if (categoryError) {
    alert(categoryError.message)
    return
  }

  categoryData.forEach((cat) => {
    categories.value.push(cat.name)
    allItems.value[cat.name] = []
  })

  if (categories.value.length > 0) {
    activeTable.value = categories.value[1] ?? categories.value[0] // 👈 pick index 1, fallback to 0
  }

  const { data, error } = await supabase
    .from('items')
    .select('id, name, img, link, status, categories(name)')

  if (error) {
    alert(error.message)
    return
  }

  ;(data as unknown as SupabaseItem[]).forEach((item) => {
    const category = item.categories?.name
    if (!category) return

    allItems.value[category].push({
      id: item.id,
      name: item.name,
      img: item.img,
      link: item.link,
      status: item.status,
      sortStatus: statusOrder[item.status],
    })
  })
})

const products = computed(() => allItems.value[activeTable.value] ?? [])
</script>
