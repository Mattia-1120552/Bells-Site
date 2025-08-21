<script setup lang="ts"></script>

<template>
  <div class="parent">
    <div class="item div1">1</div>
    <div class="item div2">2</div>
    <div class="item div3">3</div>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 8px;
}

.div1 {
  grid-column: span 2 / span 2;
  grid-row: span 5 / span 5;
}

.div2 {
  grid-column-start: 3;
}

.div3 {
  grid-column-start: 4;
}

.item {
  border: 1px solid rgba(0, 0, 0, 0.041);
  border-radius: 3px;
  padding: 1em;
}
</style>
