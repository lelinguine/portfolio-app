<script setup>
  const links = [
    { text: 'Codepen', src: 'https://codepen.io/lelinguine', img: new URL('./../assets/externals/codepen.png', import.meta.url).href },
    // { text: 'Dribble', src: 'https://dribbble.com/lelinguine/about', img: new URL('./../assets/externals/dribble.png', import.meta.url).href },
    { text: 'Figma', src: 'https://www.figma.com/@lelinguine', img: new URL('./../assets/externals/figma.png', import.meta.url).href },
    { text: 'Github', src: 'https://github.com/lelinguine', img: new URL('./../assets/externals/github.png', import.meta.url).href },
    // { text: 'Layers', src: 'https://layers.to/lelinguine', img: new URL('./../assets/externals/layers.png', import.meta.url).href },
    // { text: 'Read', src: 'https://read.cv/lelinguine', img: new URL('./../assets/externals/read.png', import.meta.url).href }
  ];
</script>

<template>
    <div class="external-container">
        <a v-for="(link, index) in links" :key="index" class="item external hover" :href="link.src" target="_blank">
          <img :src="link.img" width="20">
          <div class="disable">{{ link.text }}</div>
        </a>
    </div>
</template>
  
<style scoped>
  .external-container {
    display: flex;
  }

  .external {
    display: flex;
    align-items: center;
    padding: 0 0.6rem;
    cursor: none;
  }

  .external img {
    margin-right: 0.7em;
  }

  .external:hover img {
    filter: invert(100%);
  }

  @media screen and (orientation: portrait) {
    .disable {
      display: none;
    }

    .external img {
      margin: 0 0.2rem;
    }
  }
</style>