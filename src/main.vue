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
      <div class="timer-container">
        <Timer />
      </div>
      

      <div class="abstract">
        <h1>Portfolio</h1>
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
    background-color: white;
    display: flex;
    justify-content: space-between;
  }

  .abstract {
    height: 38px;
    display: flex;
    align-items: center;
    padding: 0 0.6rem;
  }

  .timer-container {
    display: none;
  }
  
  @media screen and (orientation: landscape) {
    .abstract {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      height: 38px;
      display: flex;
      align-items: center;
    }

    .timer-container {
      display: flex;
      align-items: center;
      height: 38px;
    }
  }

</style>