<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="link-container">
    <a
      class="link hover"
      :href="props.url"
      target="_blank"
    >
      Run project
    </a>
  </div>
</template>

<style scoped>
.link-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
}

.link {
  color: var(--black);
  border: 2px solid var(--black);
  background-color: var(--white);
  padding: 0 0.4rem;
  width: fit-content;
}

.link:hover {
  background-color: var(--black);
  color: var(--white);
}
</style>
