<script setup>
  import { openWindow } from '../assets/window.js';

  const files = [
    { text: 'Minesweeper.dart', src: new URL('./../assets/projects/minesweeper.gif', import.meta.url).href },
    { text: 'Alone in space.py', src: new URL('./../assets/projects/alone.png', import.meta.url).href },
    { text: 'Brainine.dart', src: new URL('./../assets/projects/brainine.gif', import.meta.url).href },
    { text: 'Supervision.dart', src: new URL('./../assets/projects/supervision.gif', import.meta.url).href },
  ];
</script>

<template>
  <!-- <div class="files-container">
    <div v-for="(files, index) in files" :key="index" class="files" @click="openWindow(index, 'files', '')">
      <img :src="files.src" :alt="files.text" width="60">
      <p>{{ files.text }}</p>
    </div>
  </div> -->
  <div style="display: flex; align-items: center; justify-content: center; height: calc(100% - 40px);">
    <p>Coming soon!</p>
  </div>
</template> 
  
<style scoped>
    /*.files-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
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
        margin: 1rem;
    }

    .files p {
    margin-top: 0.2rem;
    padding: 0 1rem;
    white-space: nowrap;
    }

    .files:hover p, .select {
        background-color: black;
        color: white;
    }*/
</style>