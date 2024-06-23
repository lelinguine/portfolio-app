<script setup>
  import { openWindow } from '../assets/window.js';

  const files = [
    { text: 'Minesweeper.dart', src: './src/assets/projects/minesweeper.gif' },
    { text: 'Alone in space.py', src: './src/assets/projects/alone.png' },
    // { text: 'Luigi bros.java', src: './src/assets/projects/brainine.gif' },
    { text: 'Brainine.dart', src: './src/assets/projects/brainine.gif' },
    { text: 'Supervision.dart', src: './src/assets/projects/supervision.gif' },
  ];
</script>

<template>
  <div class="files-container">
    <div v-for="(files, index) in files" :key="index" class="files" @click="openWindow(index, 'files', '')">
      <img :src="files.src" :alt="files.text" width="60">
      <p>{{ files.text }}</p>
    </div>
  </div>
</template>
  
<style scoped>
    .files-container {
        overflow: hidden;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
        margin: 0.8rem 1rem;
        max-height: calc(82%);
    }

    @media screen and (orientation: portrait) {
        .files-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .files{

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .files p {
    margin-top: 0.2rem;
    padding: 0 1rem;
    white-space: nowrap;
    }

    .files:hover {
        cursor: pointer;
    }

    .files:hover p, .select {
        cursor: pointer;
        background-color: black;
        color: white;
    }
</style>



<!-- <script setup>
    const links = [
        { text: 'Minesweeper.dart', img: new URL('./../assets/projects/minesweeper.gif', import.meta.url).href },
        // { text: 'Alone in space.py', img: new URL('./../assets/projects/alone.png', import.meta.url).href },
        // { text: 'Luigi bros.java', img: new URL('./../assets/projects/brainine.gif', import.meta.url).href },
        { text: 'Brainine.dart', img: new URL('./../assets/projects/brainine.gif', import.meta.url).href },
        { text: 'Supervision.dart', img: new URL('./../assets/projects/supervision.gif', import.meta.url).href },
    ];
</script>








<template>
  <div class="files-container">
    <div v-for="(link, index) in links" :key="index" class="files">
        <img :src="link.img" alt="logo" width="60">
        <p class="link nav">{{ link.text }}</p>
    </div>
  </div>
</template>
  








<style scoped>
    .files-container {
        overflow: hidden;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 18px;
        padding: 0.6rem 1rem;
        max-height: calc(82%);
    }

    @media screen and (max-width: 1200px) {
        .files-container {
            grid-template-columns: repeat(8, 1fr);
        }
    }

    @media screen and (max-width: 768px) {
        .files-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .files{

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .link {
        margin-top: 0.2rem;
        padding: 0 0.4rem;
        white-space: nowrap;
    }

    .date {
        color: var(--primary);
    }

    .files:hover .nav, .select {
    cursor: pointer;
    background-color: black;
    color: white;
    }

    .files:hover {
    cursor: pointer;
    }
</style> -->


