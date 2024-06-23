<script setup>
  import { openWindow } from '../assets/window.js';

  const icons = [
    { text: 'About', src: new URL('./../assets/about.png', import.meta.url).href },
    { text: 'Files', src: new URL('./../assets/files.png', import.meta.url).href },
    { text: 'More', src: new URL('./../assets/more.png', import.meta.url).href },
  ];
</script>

<template>
  <div class="icons-container">
    <div v-for="(icons, index) in icons" :key="index" class="icons" @click="openWindow(index, 'icons', 'window')">
      <img :src="icons.src" :alt="icons.text" width="40">
      <p>{{ icons.text }}</p>
    </div>
  </div>
</template>
  
<style scoped>
  .icons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    margin: 0.8rem 1rem;
  }

  .icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.6rem 0rem;
  }

  .icons p {
    margin-top: 0.2rem;
    padding: 0 0.4rem;
  }

  .icons:hover {
      cursor: pointer;
  }

  .icons:hover p, .select {
      cursor: pointer;
      background-color: black;
      color: white;
  }
</style>