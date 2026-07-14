<template>
  <div class="privacy-container">
    <p class="title">Traffic Analysis</p>
    <p class="content">
      This site uses Vercel Analytics to anonymously measure site traffic and improve its
      performance. This tool does not place cookies or collect personal data for advertising
      purposes.
    </p>
  </div>
</template>

<style scoped>
.privacy-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap);
  padding: var(--padding);
  height: calc(100% - var(--window-header-height));
  width: calc(100% - var(--window-header-height));
  background-color: var(--white);
  position: relative;
  z-index: 1;
}
</style>
