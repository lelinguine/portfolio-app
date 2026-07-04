<script setup>
import { ref } from 'vue'
import { currentProject } from '../store.js'
</script>

<template>
  <div class="project-container">
    <div class="project-header">
      <h1>{{ currentProject.title }}</h1>
      <span class="date">{{ currentProject.date }}</span>
    </div>
    <video
      class="video-cover"
      :src="currentProject.video"
      autoplay
      muted
      loop
      playsinline
    ></video>
    <p>
      Dolore eu amet est esse irure et labore velit. In sunt reprhenderit nisi aliqua et ex
      voluptate magnae laborum qui ea ad dolor Lorem. Pariatur qui velit ut in deserunt et nisi qui
      in eu irure exercitation. Mollit tempor exercitation adipisicing tempor elit amet enim id
      consequat incididunt. Et anim non commodo nisi aliquip. Velit elit magna elit nulla ea fugiat
      laboris elit sunt in nostrud nisi.
    </p>
  </div>
</template>

<style scoped>
.project-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
  padding: var(--padding);
  gap: var(--gap);
  height: calc(100% - 2 * var(--window-header-height));
  width: calc(100% - var(--window-header-height));
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--white);
  position: relative;
  z-index: 1;
}

.project-container::-webkit-scrollbar {
  display: none;
}

.project-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  width: 100%;
  height: fit-content;
}
</style>
