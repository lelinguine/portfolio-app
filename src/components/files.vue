<script setup>
import { openFiles } from '../assets/open.js'

const files = [
  {
    number: '1',
    text: 'Portfolio',
    date: '08.2025',
    src: new URL('./../assets/projects/', import.meta.url).href,
    data: 'portfolio',
    link: '#',
  },
  {
    number: '2',
    text: 'Sitomnia',
    date: '06.2025',
    src: new URL('./../assets/projects/', import.meta.url).href,
    data: 'sitomnia',
    link: 'http://valentinluginbuhl.fr:3000/',
  },
  {
    number: '3',
    text: 'Othello',
    date: '01.2025',
    src: new URL('./../assets/projects/', import.meta.url).href,
    data: 'Othello',
    link: 'https://othello-project.vercel.app/',
  },
]
</script>

<template>
  <div class="files-window">
    <div class="files-container">
      <div class="categories">
        <div class="data">
          <p>Projects</p>
          <p>Time</p>
        </div>
      </div>
      <div
        v-for="(file, index) in files"
        :key="index"
        class="files hover"
        @click="openFiles(index, 'files', file)"
      >
        <p>{{ file.number }}.</p>
        <div class="data">
          <p class="text">{{ file.text }}</p>
          <p class="date">{{ file.date }}</p>
        </div>
      </div>
    </div>
    <div class="infos-container">
      <p>No selected file.</p>
    </div>
  </div>
</template>

<style scoped>
.files-window {
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: calc(100% - 40px);
}
.infos-container {
  border-left: solid 2px var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (orientation: portrait) {
  .files-window {
    grid-template-rows: 2fr 1fr;
    grid-template-columns: unset;
  }
  .infos-container {
    border-top: solid 2px var(--black);
    border-left: unset;
  }
}
.files-container {
  overflow-y: auto;
}
.files,
.categories {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
  padding: 0rem 0.8rem;
  height: 40px;
}
.data {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.files:hover p.text,
.select {
  background-color: var(--black);
  color: var(--white);
}
</style>
