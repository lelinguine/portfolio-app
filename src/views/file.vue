<script setup>
import { openWindow } from '../utils/window.js'
import { currentProject } from '../utils/store.js'
import { files } from '../utils/content.js'

const handleIconClick = (file) => {
  currentProject.value = file
  openWindow(file.id, { itemSelector: '.file', windowId: 'project', skipIfOpen: true })
}
</script>

<template>
  <div class="files-container">
    <div
      class="file hover"
      v-for="file in files"
      :key="file.id"
      @click="handleIconClick(file)"
      :data-id="file.id"
    >
      <img
        v-if="file.cover"
        class="cover"
        :src="file.cover"
        alt="Cover image of the project {{ file.title }}"
      />
      <p>{{ file.title }}</p>
      <span class="date">{{ file.date }}</span>
    </div>
  </div>
</template>

<style scoped>
.files-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  grid-template-rows: repeat(auto-fill, minmax(150px, auto));
  gap: 1rem;
  padding: var(--padding);
  height: calc(100% - 2 * var(--window-header-height));
  width: calc(100% - var(--window-header-height));
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--white);
  position: relative;
  z-index: 1;
}

.files-container::-webkit-scrollbar {
  display: none;
}

.file {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
}

.file p {
  margin-top: 0.2rem;
}

.file:hover p,
.select {
  background-color: var(--black) !important;
  color: var(--white) !important;
}

.cover {
  width: 100%;
  height: 100px;
  object-fit: cover;
}
</style>
