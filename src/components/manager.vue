<script setup>
import Window from './window.vue'
import About from './about.vue'
import More from './more.vue'
import Files from './file.vue'
import Project from './project.vue'

const windows = [
  {
    id: 'about',
    component: 'About',
    top: '20%',
    left: '10%',
    width: '340px',
    height: 'fit-content',
  },
  {
    id: 'files',
    component: 'Files',
    top: '30%',
    left: '50%',
    width: '540px',
    height: '340px',
  },
  {
    id: 'project',
    component: 'Project',
    top: '40%',
    left: '40%',
    width: '340px',
    height: '540px',
  },
  {
    id: 'more',
    component: 'More',
    top: '70%',
    left: '20%',
    width: '340px',
    height: 'fit-content',
  },
]
</script>

<template>
  <Window
    v-for="(window, index) in windows"
    :key="index"
    :id="window.id"
    :header="window.component"
    :width="window.width"
    :height="window.height"
    :top="window.top"
    :left="window.left"
  >
    <About v-if="window.component === 'About'" />
    <Files v-else-if="window.component === 'Files'" />
    <Project v-else-if="window.component === 'Project'" />
    <More v-else-if="window.component === 'More'" />
  </Window>
</template>
