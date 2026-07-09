<script setup>
import { Analytics } from '@vercel/analytics/vue'

import Externals from './components/external.vue'
import Icons from './components/icon.vue'
import Manager from './components/manager.vue'
import Mouse from './components/mouse.vue'
import Timer from './components/timer.vue'
</script>

<template>
  <Analytics />
  <div class="container">
    <header class="header-border">
      <Externals />
      <div class="title-container">
        <h1>PORTFOLIO</h1>
      </div>
      <div class="timer-container">
        <Timer />
      </div>
    </header>
    <main>
      <Icons />
      <Manager />
      <Mouse />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

header {
  height: 38px;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  z-index: 999999;
  border-bottom: solid 2px var(--black);
}

.timer-container {
  display: flex;
  align-items: center;
  height: 38px;
}

.title-container {
  display: none;
}

@media screen and (min-width: 926px) {
  .title-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 38px;
    display: flex;
    align-items: center;
  }
}
</style>
