<template>
  <div class="more-container">
    <p class="title">What do you want to see?</p>
    <p class="version">Version 2.2-a - 2026</p>
  </div>
</template>

<style scoped>
.more-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding);
  height: calc(100% - var(--window-header-height));
  width: calc(100% - var(--window-header-height));
  background-color: var(--white);
  position: relative;
  z-index: 1;
}
</style>
