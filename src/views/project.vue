<script setup>
import { currentProject } from '../utils/store.js'

import Link from '../components/link.vue'
</script>

<template>
  <div class="project-container">
    <div class="project-header">
      <h1>{{ currentProject.title }}</h1>
      <span class="date">{{ currentProject.date }}</span>
    </div>
    <img
      v-if="currentProject.cover"
      class="cover"
      :src="currentProject.cover"
      alt="Cover image of the project"
    />

    <Link
      v-if="currentProject.link"
      :url="currentProject.link"
    />
    <p>
      {{ currentProject.description }}
    </p>

    <p>Lien github, figma...</p>

    <p>image du projet</p>
  </div>
</template>

<style scoped>
.project-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
  padding: var(--padding);
  gap: var(--gap);
  height: calc(100% - 2 * var(--window-header-height));
  width: calc(100% - var(--window-header-height));
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--white);
  position: relative;
  z-index: 1;
}

.project-container::-webkit-scrollbar {
  display: none;
}

.project-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  width: 100%;
  height: fit-content;
}

.cover {
  min-height: 200px;
  max-height: 200px;
  object-fit: cover;
}
</style>
