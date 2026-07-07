<script setup>
import { openProjectWindow } from '../utils/window.js'
import { currentProject } from '../utils/store.js'

const files = [
  {
    id: 'sitomnia',
    title: 'Sitomnia',
    date: '06.2025',
    video: new URL('./../assets/videos/sitomnia.mp4', import.meta.url).href,
    description:
      'Sitomnia is a game that explores the concept of sleep paralysis and the fear of being trapped in a dream. Players navigate through a series of surreal environments, solving puzzles and avoiding nightmarish creatures. The game aims to create an immersive experience that blurs the line between reality and dreams.',
    link: 'https://sitomnia.valentinluginbuhl.fr',
  },
  {
    id: 'othello',
    title: 'Othello',
    date: '02.2025',
    video: new URL('./../assets/videos/othello.mp4', import.meta.url).href,
    description:
      "Othello is a classic board game that has been adapted into a digital format. Players take turns placing their pieces on the board, with the goal of capturing their opponent's pieces by sandwiching them between their own. The game requires strategic thinking and planning ahead to outmaneuver the opponent.",
    link: 'https://othello.valentinluginbuhl.fr',
  },
  {
    id: 'minesweeper',
    title: 'Minesweeper',
    date: '04.2024',
    video: new URL('./../assets/videos/minesweeper.mp4', import.meta.url).href,
    description:
      'Minesweeper is a classic puzzle game where players must clear a grid of hidden mines without detonating any of them. The game provides numerical clues to help players deduce the locations of the mines. It requires logical thinking and careful planning to successfully navigate the grid.',
    link: 'https://minesweeper.valentinluginbuhl.fr',
  },
  {
    id: 'supervision',
    title: 'Supervision',
    date: '06.2022',
    video: new URL('./../assets/videos/supervision.mp4', import.meta.url).href,
    description:
      'Supervision is a futuristic action game that puts players in the role of a high-tech surveillance agent. Players must monitor and manage various security systems to prevent crimes and protect citizens. The game combines strategy, quick reflexes, and problem-solving skills to create an engaging experience.',
    link: 'https://supervision.valentinluginbuhl.fr',
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

.video-cover {
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
}
</style>
