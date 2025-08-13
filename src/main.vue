<script setup>
  import Externals from './components/externals.vue';
  import Icons from './components/icons.vue';
  import Manager from './components/manager.vue';
  import Mouse from './components/mouse.vue';
  import Timer from './components/timer.vue';
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
  background-color: white;
  display: flex;
  justify-content: space-between;
}
</style>