<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const days = ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'];
const months = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

const currentTime = ref('');

const updateTime = () => {
  const now = new Date();
  const dayName = days[now.getDay()];
  const day = now.getDate();
  const monthName = months[now.getMonth()];
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  currentTime.value = `${dayName} ${day} ${monthName} ${hours}:${minutes}:${seconds}`;
};

onMounted(() => {
  updateTime();
  const interval = setInterval(updateTime, 1000);
  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <div class="timer-container">
    <p class="timer">{{ currentTime }}</p>
  </div>
  
</template>

<style scoped>
.timer-container {
  display: flex;
  justify-content: start;
  align-items: center;
}

.timer {
  width: 140px;
}
</style>