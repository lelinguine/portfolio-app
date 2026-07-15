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
      alt="Cover image of the project {{ currentProject.title }}"
      loading="lazy"
    />

    <Link
      v-if="currentProject.link"
      :url="currentProject.link"
    />
    <p class="description">
      {{ currentProject.description }}
    </p>

    <p>image du projet</p>

    <ul class="link-list">
      <li
        class="link"
        v-if="currentProject.github"
      >
        <p>GitHub:</p>
        <a
          class="hover"
          :href="currentProject.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          See repository
        </a>
      </li>
      <li
        class="link"
        v-if="currentProject.figma"
      >
        <p>Figma:</p>
        <a
          class="hover"
          :href="currentProject.figma"
          target="_blank"
          rel="noopener noreferrer"
        >
          See prototype
        </a>
      </li>

      <li
        class="link"
        v-if="currentProject.wiki"
      >
        <p>Wiki:</p>
        <a
          class="hover"
          :href="currentProject.wiki"
          target="_blank"
          rel="noopener noreferrer"
        >
          See documentation
        </a>
      </li>
    </ul>
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

.link-list {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
  height: fit-content;
}

.link {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
  width: 100%;
  height: fit-content;
}

.link a {
  text-decoration: underline;
}

.cover {
  min-height: 200px;
  max-height: 200px;
  object-fit: cover;
}

.description {
  white-space: pre-line;
}
</style>
