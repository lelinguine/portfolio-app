<script setup>
import { openWindow } from '../assets/window.js'

const icons = [
  {
    id: 'about',
    text: 'About',
    src: new URL('./../assets/icons/about.png', import.meta.url).href,
  },
  {
    id: 'files',
    text: 'Files',
    src: new URL('./../assets/icons/files.png', import.meta.url).href,
  },
  {
    id: 'gallery',
    text: 'Gallery',
    src: new URL('./../assets/icons/gallery.png', import.meta.url).href,
  },
  {
    id: 'contact',
    text: 'Contact',
    src: new URL('./../assets/icons/contact.png', import.meta.url).href,
  },
  {
    id: 'more',
    text: 'More',
    src: new URL('./../assets/icons/more.png', import.meta.url).href,
  },
]
</script>

<template>
  <div class="icons-container">
    <div
      v-for="(icons, index) in icons"
      :key="index"
      class="icons hover"
      @click="openWindow(icons.id, 'icons', 'window')"
      :data-id="icons.id"
    >
      <img
        :src="icons.src"
        :alt="icons.text"
        width="40"
      />
      <p :class="{ select: icons.text === 'About' }">{{ icons.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.icons-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 1.2rem 1rem;
  gap: 1rem;
}

.icons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icons p {
  margin-top: 0.2rem;
  padding: 0 0.4rem;
  color: var(--white);
}

.icons:hover p,
.select {
  background-color: var(--black);
  color: var(--white);
}
</style>
