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
  height: calc(100% - var(--window-header-height));
}
.project-container {
  overflow-y: auto;
  overflow-x: hidden;
  padding: var(--padding);
  width: 100%;
  height: calc(100% - var(--window-header-height));
}

.project-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.project-container::-webkit-scrollbar {
  display: none;
}
</style>
