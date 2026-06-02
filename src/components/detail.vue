<script setup>
import { ref } from 'vue'
import { subscribe } from '../store.js'

const currentProject = ref(null)

subscribe((value) => {
  currentProject.value = value
})
</script>

<template>
  <div class="details">
    <p>No content available.</p>
  </div>
</template>

<style scoped>
.details {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
