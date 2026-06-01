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
    link: 'https://sitomnia.valentinluginbuhl.fr/',
  },
  {
    number: '3',
    text: 'Othello',
    date: '01.2025',
    src: new URL('./../assets/projects/', import.meta.url).href,
    data: 'Othello',

    link: 'https://othello.valentinluginbuhl.fr/',
  },
]
</script>

<template>
  <div class="files-window">
    <div class="files-container">
      <div class="file hover">
        <video
          class="video-cover"
          src="./../assets/videos/alone.mp4"
          autoplay
          muted
          loop
          playsinline
        ></video>
        <p>Alone in space</p>
        <span class="date">09.2023</span>
      </div>

      <div class="file hover">
        <video
          class="video-cover"
          src="./../assets/videos/luigi.mp4"
          autoplay
          muted
          loop
          playsinline
        ></video>
        <p>Luigi bros.</p>
        <span class="date">09.2023</span>
      </div>
    </div>
    <div class="infos-container"><p>No selected file.</p></div>
  </div>
</template>

<style scoped>
.files-window {
  display: grid;
  grid-template-rows: 2fr 1fr;
  height: calc(100% - 40px);
}
.infos-container {
  border-top: solid 2px var(--black);
  display: flex;
  padding: var(--padding);
  align-items: center;
  justify-content: center;
}
.files-container {
  overflow-y: auto;
  overflow-x: hidden;
  padding: var(--padding);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  gap: 1rem;
  align-content: start;
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

.file:hover p {
  background-color: var(--black);
  color: var(--white);
}

.video-cover {
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
}
</style>
