<script setup>
import { openFileWindow } from '../assets/open.js'

const files = [
  {
    id: 'alone',
    title: 'Alone in space',
    date: '09.2023',
    video: new URL('./../assets/videos/alone.mp4', import.meta.url).href,
  },
  {
    id: 'luigi',
    title: 'Luigi bros.',
    date: '09.2023',
    video: new URL('./../assets/videos/luigi.mp4', import.meta.url).href,
  },
]

const handleIconClick = (file) => {
  openFileWindow(file.id)
}
</script>

<template>
  <div class="files-window">
    <div class="files-container">
      <div
        class="file hover"
        v-for="file in files"
        :key="file.id"
        @click="handleIconClick(file)"
        :data-id="file.id"
      >
        <video
          class="video-cover"
          :src="file.video"
          autoplay
          muted
          loop
          playsinline
        ></video>
        <p>{{ file.title }}</p>
        <span class="date">{{ file.date }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.files-window {
  display: flex;
  height: calc(100% - var(--window-header-height));
}
.files-container {
  overflow-y: auto;
  overflow-x: hidden;
  padding: var(--padding);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  gap: 1rem;
  height: calc(100% - var(--window-header-height));
  width: 100%;
}

.files-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.files-container::-webkit-scrollbar {
  display: none;
}

.file {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  width: 100%;
  height: fit-content;
}

.file:hover p,
.select {
  background-color: var(--black) !important;
  color: var(--white) !important;
}

.video-cover {
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
}
</style>
