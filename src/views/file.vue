<script setup>
import { openProjectWindow } from '../assets/window.js'
import { currentProject } from '../store.js'

import AloneDetails from './details/alone.vue'
import ArgenticDetails from './details/argentic.vue'
import MinesweeperDetails from './details/minesweeper.vue'
import OthelloDetails from './details/othello.vue'
import PortfolioDetails from './details/portfolio.vue'
import SitomniaDetails from './details/sitomnia.vue'
import LuigiDetails from './details/luigi.vue'
import SupervisionDetails from './details/supervision.vue'

const files = [
  {
    id: 'argentic',
    component: ArgenticDetails,
    title: 'Argentic',
    date: '11.2025',
    video: new URL('./../assets/videos/argentic.mp4', import.meta.url).href,
  },
  {
    id: 'sitomnia',
    component: SitomniaDetails,
    title: 'Sitomnia',
    date: '06.2025',
    video: new URL('./../assets/videos/sitomnia.mp4', import.meta.url).href,
  },
  {
    id: 'othello',
    component: OthelloDetails,
    title: 'Othello',
    date: '02.2025',
    video: new URL('./../assets/videos/othello.mp4', import.meta.url).href,
  },
  {
    id: 'minesweeper',
    component: MinesweeperDetails,
    title: 'Minesweeper',
    date: '04.2024',
    video: new URL('./../assets/videos/minesweeper.mp4', import.meta.url).href,
  },
  {
    id: 'alone',
    component: AloneDetails,
    title: 'Alone in space',
    date: '09.2023',
    video: new URL('./../assets/videos/alone.mp4', import.meta.url).href,
  },
  {
    id: 'luigi',
    component: LuigiDetails,
    title: 'Luigi bros.',
    date: '06.2023',
    video: new URL('./../assets/videos/luigi.mp4', import.meta.url).href,
  },
  {
    id: 'supervision',
    component: SupervisionDetails,
    title: 'Supervision',
    date: '06.2022',
    video: new URL('./../assets/videos/supervision.mp4', import.meta.url).href,
  },
]

const handleIconClick = (file) => {
  currentProject.value = file
  openProjectWindow(file.id)
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
</template>

<style scoped>
.files-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  gap: 1rem;
  padding: var(--padding);
  height: calc(100% - 2 * var(--window-header-height));
  width: calc(100% - var(--window-header-height));
  overflow-y: auto;
  overflow-x: hidden;
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
