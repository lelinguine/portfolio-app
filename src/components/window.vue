<script setup>
const props = defineProps({
  header: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  top: {
    type: String,
    default: 0,
  },
  left: {
    type: String,
    default: 0,
  },
})
</script>

<template>
  <div
    :style="{
      width: props.width,
      height: props.height,
      top: props.top,
      left: props.left,
    }"
    :class="[
      'window draggable border shadow',
      { display: header === 'About', other: header !== 'About' },
    ]"
  >
    <div :class="['header header-border', { select: header === 'About' }]">
      <p>{{ header }}</p>
      <div class="close hover">
        <img
          src="../assets/cross.svg"
          alt="close"
          width="15"
        />
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
@media screen and (orientation: portrait) {
  .window {
    width: 100% !important;
    height: calc(100% - 40px) !important;
    top: 40px !important;
    left: 0 !important;
    border: unset !important;
  }
}
.draggable {
  position: absolute;
  background-color: var(--white);
  display: none;
}
.display {
  display: block;
}

.other {
  display: none;
}

.header {
  width: 100%;
  height: 38px;
  background-color: var(--white);
  color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.select {
  filter: invert(100%);
  border-bottom: solid 2px var(--white);
}
.close {
  position: absolute;
  right: 0.4rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.4rem 0;
}
</style>
