<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a
    :href="props.url"
    target="_blank"
    rel="noopener noreferrer"
  >
    See Project
  </a>
</template>
