<script setup>
import Detail from './detail.vue'
</script>

<template>
  <div class="project-window">
    <div class="project-container">
      <Detail />
    </div>
  </div>
</template>

<style scoped>
.project-window {
  display: flex;
}
.project-container {
  overflow-y: auto;
  overflow-x: hidden;
  padding: var(--padding);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  gap: 1rem;
  height: calc(100% - var(--window-header-height));
  width: 100%;
}

.project-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.project-container::-webkit-scrollbar {
  display: none;
}
</style>
