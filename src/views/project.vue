<script setup>
import { ref } from 'vue'
import { currentProject } from '../store.js'
</script>

<template>
  <div class="project-container">
    <component
      v-if="currentProject.component"
      :is="currentProject.component"
    />
    <p v-else>No content available.</p>
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
