<script setup>
import { ref } from 'vue'

import profile from '../assets/profile.jpeg'
import icon from '../assets/icon.jpg'

const isAlternateProfile = ref(false)

const profileImage = ref(icon)

function changeProfileImage() {
  isAlternateProfile.value = !isAlternateProfile.value
  profileImage.value = isAlternateProfile.value ? profile : icon
}
</script>

<template>
  <div class="about-container">
    <div class="about">
      <img
        class="vector absolute"
        src="../assets/vector.png"
        alt="Vector illustration"
      />
      <p>Valentin LUGINBÜHL</p>
      <h1>DEVELOPER & DESIGNER</h1>
    </div>

    <img
      class="profile hover"
      :src="profileImage"
      alt="Profile picture"
      @click="changeProfileImage"
    />
    <div class="about-description">
      <p>
        Hi and welcome to my portfolio. I am a software engineer who loves creating complete,
        enjoyable, and user-centric experiences. Here, you can explore some of the projects I’ve
        worked on so far—enjoy your visit!
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  width: calc(100% - var(--padding) * 2);
  height: calc(100% - var(--window-header-height));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding);
  gap: var(--gap);
  background-color: var(--white);
  position: relative;
  z-index: 1;
}

.about {
  position: relative;
}

.profile {
  border-radius: 100px;
  height: 100px;
  width: 100px;
  object-fit: cover;
}

.absolute {
  position: absolute;
  top: 0;
  left: 0;
  margin: -2px -12px;
}

.vector {
  width: 90px;
}

.about-description {
  width: 100%;
}
</style>
