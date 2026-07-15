<script setup>
import { openWindow } from '../utils/window.js'

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
    href: 'https://argentic.valentinluginbuhl.fr/',
  },
  {
    id: 'contact',
    text: 'Contact',
    src: new URL('./../assets/icons/contact.png', import.meta.url).href,
    href: 'https://fr.linkedin.com/in/lelinguine',
  },
  {
    id: 'more',
    text: 'More',
    src: new URL('./../assets/icons/more.png', import.meta.url).href,
  },

  {
    id: 'privacy',
    text: 'Privacy',
    src: new URL('./../assets/icons/privacy.png', import.meta.url).href,
  },
]

const handleIconClick = (icon) => {
  if (icon.href) {
    window.open(icon.href, '_blank', 'noopener,noreferrer')
    return
  }

  openWindow(icon.id)
}
</script>

<template>
  <div class="icons-container">
    <div
      v-for="(icon, index) in icons"
      :key="index"
      class="icons hover"
      @click="handleIconClick(icon)"
      :data-id="icon.id"
    >
      <img
        :src="icon.src"
        :alt="icon.text"
        width="38"
        height="38"
        alt="Icon for {{ icon.text }}"
        loading="lazy"
      />
      <p :class="{ select: icon.text === 'About' }">{{ icon.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.icons-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 1.2rem 0.5rem;
  gap: 1rem;
  height: 100%;
}

.icons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icons:last-child {
  margin-top: auto;
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
