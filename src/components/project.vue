<script setup></script>

<template>
  <div class="projects-window">
    <div class="projects-container">
      <p>Content</p>
    </div>
  </div>
</template>

<style scoped>
.projects-window {
  display: flex;
}
.projects-container {
  overflow-y: auto;
  overflow-x: hidden;
  padding: var(--padding);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  gap: 1rem;
  height: calc(100% - var(--window-header-height));
  width: 100%;
}

.projects-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.projects-container::-webkit-scrollbar {
  display: none;
}
</style>
