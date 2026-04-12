<template>
  <div class="flex flex-row gap-4 justify-center h-[75vh]">
    <!-- Table Switch Buttons -->
    <div class="flex flex-col gap-2">
      <Button
        label="Cats"
        raised
        :outlined="activeTable !== 'cats'"
        :disabled="activeTable == 'cats'"
        @click="activeTable = 'cats'"
      />
      <Button
        raised
        label="Dogs"
        :outlined="activeTable !== 'dogs'"
        :disabled="activeTable == 'dogs'"
        @click="activeTable = 'dogs'"
      />
      <Button
        raised
        label="Frogs"
        :outlined="activeTable !== 'frogs'"
        :disabled="activeTable == 'frogs'"
        @click="activeTable = 'frogs'"
      />
    </div>

    <div class="w-[50vw] flex">
      <DataTable
        :value="products"
        sortField="sortStatus"
        :sortOrder="1"
        paginator
        :rows="6"
        scrollable
        scrollHeight="calc(72vh - 5rem)"
        class="w-full"
      >
        <!-- Header -->
        <template #header>
          <span class="text-xl font-bold"> {{ products.length }} total items </span>
        </template>

        <!-- Empty -->
        <template #empty> No items found. </template>

        <!-- Image -->
        <Column header="Image" style="width: 30%">
          <template #body="{ data }">
            <img :src="data.img" class="w-full h-33 object-cover" />
          </template>
        </Column>

        <!-- Name -->
        <Column field="name" header="Name" />

        <!-- Status -->
        <Column field="sortStatus" header="Status" sortable>
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getSeverity(data)" />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Product {
  id: string
  name: string
  img: string
  status: 'good' | 'potential' | 'bad'
  sortStatus: 1 | 2 | 3
}

type TableType = 'cats' | 'dogs' | 'frogs'

const activeTable = ref<TableType>('cats')

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

const cats: Product[] = [
  {
    id: '1',
    name: 'Cat 1',
    img: '/fallback/drawings/cat1.png',
    status: 'good',
    sortStatus: statusOrder.good,
  },
]

const dogs: Product[] = [
  {
    id: '2',
    name: 'Dog 1',
    img: '/fallback/drawings/cat2.png',
    status: 'bad',
    sortStatus: statusOrder.bad,
  },
  {
    id: '2',
    name: 'Dog 51',
    img: '/fallback/drawings/cat2.png',
    status: 'good',
    sortStatus: statusOrder.good,
  },
  {
    id: '2',
    name: 'Dog 1',
    img: '/fallback/drawings/cat2.png',
    status: 'bad',
    sortStatus: statusOrder.bad,
  },
  {
    id: '2',
    name: 'Dog 1',
    img: '/fallback/drawings/cat2.png',
    status: 'bad',
    sortStatus: statusOrder.bad,
  },
  {
    id: '2',
    name: 'Dog 1',
    img: '/fallback/drawings/cat2.png',
    status: 'bad',
    sortStatus: statusOrder.bad,
  },
  {
    id: '2',
    name: 'Dog 1',
    img: '/fallback/drawings/cat2.png',
    status: 'bad',
    sortStatus: statusOrder.bad,
  },
  {
    id: '2',
    name: 'Dog 1',
    img: '/fallback/drawings/cat2.png',
    status: 'bad',
    sortStatus: statusOrder.bad,
  },
  {
    id: '2',
    name: 'Dog 1',
    img: '/fallback/drawings/cat2.png',
    status: 'bad',
    sortStatus: statusOrder.bad,
  },
  {
    id: '2',
    name: 'Dog 1',
    img: '/fallback/drawings/cat2.png',
    status: 'bad',
    sortStatus: statusOrder.bad,
  },
  {
    id: '2',
    name: 'Dog 1',
    img: '/fallback/drawings/cat2.png',
    status: 'bad',
    sortStatus: statusOrder.bad,
  },
  {
    id: '2',
    name: 'Dog 1',
    img: '/fallback/drawings/cat2.png',
    status: 'bad',
    sortStatus: statusOrder.bad,
  },
  {
    id: '2',
    name: 'Dog 1',
    img: '/fallback/drawings/cat2.png',
    status: 'bad',
    sortStatus: statusOrder.bad,
  },
  {
    id: '2',
    name: 'Dog 1',
    img: '/fallback/drawings/cat2.png',
    status: 'bad',
    sortStatus: statusOrder.bad,
  },
]

const frogs: Product[] = [
  {
    id: '3',
    name: 'Frog 1',
    img: '/fallback/drawings/cat3.png',
    status: 'potential',
    sortStatus: statusOrder.potential,
  },
]

const tables: Record<TableType, Product[]> = {
  cats,
  dogs,
  frogs,
}

const products = computed(() => tables[activeTable.value])
</script>
