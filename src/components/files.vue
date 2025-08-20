<script setup>
  import { openFiles } from '../assets/window.js';

  const files = [
    { text: 'Portfolio', src: new URL('./../assets/files.png', import.meta.url).href },
    { text: 'Sitomnia', src: new URL('./../assets/projects/minesweeper.gif', import.meta.url).href },
    { text: 'Othello', src: new URL('./../assets/projects/alone.png', import.meta.url).href },
    { text: 'Brainine', src: new URL('./../assets/projects/brainine.gif', import.meta.url).href }
  ];
</script>

<template>



  <div class="files-window">
    <div class="files-container">

      <!-- <div
        v-for="(file, index) in files"
        :key="index"
        class="files hover"
        :class="{ 'header-border': index !== files.length - 1 }"
        @click="openFiles()"
      >
        <p :class="{ select: file.text === 'About' }">{{ file.text }}</p>
      </div> -->


      <p>Coming soon!</p>







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
    overflow-y: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
  }







  .files {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .files p {
    padding: 0.6rem 0rem;
  }

  .files img {
    width: 20px;
    height: 20px;
  }

  .files:hover p, .select {
      background-color: var(--black);
      color: var(--white);
  }




  
    








</style>