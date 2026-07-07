<script setup>
import { openWindow } from '../utils/window.js'
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
    id: 'bernalis',
    title: 'Bernalis',
    date: '05.2025',
    video: new URL('./../assets/videos/bernalis.mp4', import.meta.url).href,
    description:
      "Bernalis is a innovative puzzle game that challenges players to solve complex riddles and navigate through intricate mazes. The game combines elements of strategy and logic to create an engaging experience that tests the player's problem-solving skills.",
    link: 'https://www.figma.com/proto/uAJFoIITJLfz5WiYJgg5tr/Bernalis?node-id=64-131&p=f&t=3ckZYj7hMAar5GvT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A16',
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
    id: 'luigi',
    title: 'Luigi Bros',
    date: '06.2023',
    video: new URL('./../assets/videos/luigi.mp4', import.meta.url).href,
    description:
      'Luigi Bros is a side-scrolling platformer game where players control Luigi as he navigates through various levels, collecting coins and avoiding enemies. The game features vibrant graphics and engaging gameplay that captures the essence of the classic Mario franchise.',
    link: '',
  },
  {
    id: 'brainine',
    title: 'Brainine',
    date: '10.2022',
    video: new URL('./../assets/videos/brainine.mp4', import.meta.url).href,
    description:
      'Brainine is a challenging puzzle game that pushes players to think critically and solve complex problems. The game features a variety of brain-teasing levels that require strategic thinking and creativity to overcome.',
    link: '',
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
      <!-- <video
        class="video-cover"
        :src="file.video"
        autoplay
        muted
        loop
        playsinline
      ></video> -->
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
