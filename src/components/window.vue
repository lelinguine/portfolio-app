<script setup>

const props = defineProps({
    header: {
        type: String,
        required: true
    },
    width: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    top: {
        type: String,
        default: 0
    },
    left: {
        type: String,
        default: 0
    }
});
</script>

<template>
  <div :style="{ width: props.width, height: props.height, top: props.top, left: props.left }" class="window draggable shadow">
    <div class="header border">
      <p>{{ header }}</p>
      <div class="close">
        <img src="../assets/cross.svg" alt="close" width="15"/>
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
    background-color: white;
    border: solid 2px black;
    display: none;
  }

  .header {
    width: 100%;
    height: 38px;
    background-color: white;
    cursor: move;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .select {
    filter: invert(100%);
  }

  .close {
    position: absolute;
    right: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0 0.5rem 0;
  }
</style>
