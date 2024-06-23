<script setup>
  import Externals from './components/externals.vue';
  import Timer from '../src/components/timer.vue';
  import Icons from './components/icons.vue';
  import Manager from './components/manager.vue';
</script>

<template>
  <div class="container">
    <header class="border">
      <Externals />
      <Timer />
    </header>
    <main>
      <Icons />
      <Manager />
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
  background-color: white;
  display: flex;
  justify-content: space-between;
  z-index: 2147483647;
}
</style>
