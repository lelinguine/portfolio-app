<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const currentTime = ref('');

const updateTime = () => {
  const now = new Date();
  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const day = now.getDate();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const hourStr = String(hours).padStart(2, '0');
  currentTime.value = `${dayName} ${day} ${monthName} ${hourStr}:${minutes}${ampm}`;
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
  padding: 0 0.6rem;
}
</style>