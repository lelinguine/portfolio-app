<template>
  <div class="about-container">
    <div class="about">
      <img class="absolute" src="../assets/vector.png" alt="vector" width="90">
      <p class="title">Valentin LUGINBÜHL</p>
      <h1>DESIGNER & DEVELOPER</h1>
      <div class="student"><p>(Student)</p></div>
    </div>
  </div>
  
</template>

<style scoped>
  .about-container {
      width: 100%;
      height: calc(100% - 40px);
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .about {
    position: relative;
  }

  .absolute {
    position: absolute;
    top: 0;
    left: 0;
    margin: -2px -12px;
  }

  .student {
    display: flex;
    justify-content: end;
  }
</style>