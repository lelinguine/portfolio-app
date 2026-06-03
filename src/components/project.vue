<script setup>
import { ref } from 'vue'
import { subscribe } from '../store.js'

const currentProject = ref(null)

subscribe((value) => {
  currentProject.value = value
})
</script>

<template>
  <div class="project-container">
    <p>No content available.</p>
  </div>
</template>

<style scoped>
.project-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
  padding: var(--padding);
  height: calc(100% - 2 * var(--window-header-height));
  width: calc(100% - var(--window-header-height));
  overflow-y: auto;
  overflow-x: hidden;
}

.project-container::-webkit-scrollbar {
  display: none;
}
</style>
