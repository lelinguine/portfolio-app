<script setup>
import { onMounted } from 'vue'

class ClickSpark extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
            <style>
                :host { display: contents; }
                svg { pointer-events: none; position: absolute; rotate: -20deg; stroke: var(--click-spark-color, currentcolor); z-index: 999999; }
                line { stroke-dasharray: 30; stroke-dashoffset: 30; transform-origin: center; }
            </style>
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                ${Array.from({ length: 8 }, () => `<line x1="50" y1="30" x2="50" y2="4"/>`).join('')}
            </svg>
        `
  }
}
customElements.define('click-spark', ClickSpark)

let listeners = {}

onMounted(() => {
  const cursor = document.querySelector('.cursor')
  if (!cursor) return

  // Cursor movement
  listeners.mousemove = (e) => {
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
    cursor.style.display = 'block'
  }
  window.addEventListener('mousemove', listeners.mousemove)

  // Mouse leave
  listeners.mouseleave = () => {
    cursor.classList.remove('drag')
    cursor.classList.remove('hand')
    cursor.classList.remove('enter')
    cursor.style.display = 'none'
  }
  document.body.addEventListener('mouseleave', listeners.mouseleave)

  // Hover elements (delegation)
  listeners.hoverEnter = (e) => {
    if (e.target.classList && e.target.classList.contains('hover')) {
      cursor.classList.add('enter')
    }
  }
  document.addEventListener('mouseenter', listeners.hoverEnter, true)

  listeners.hoverLeave = (e) => {
    if (e.target.classList && e.target.classList.contains('hover')) {
      cursor.classList.remove('enter')
    }
  }
  document.addEventListener('mouseleave', listeners.hoverLeave, true)

  // Header drag (delegation)
  listeners.headerUp = () => {
    cursor.classList.remove('drag')
  }
  document.addEventListener('mouseup', listeners.headerUp, true)

  document.querySelectorAll('.header').forEach((header) => {
    const headerEnter = (e) => {
      if (e.target && e.target.closest && e.target.closest('.close')) return
      cursor.classList.add('hand')
    }
    const headerDown = (e) => {
      if (e.target && e.target.closest && e.target.closest('.close')) return
      cursor.classList.add('drag')
    }
    const headerUp = (e) => {
      if (e.target && e.target.closest && e.target.closest('.close')) return
      cursor.classList.remove('drag')
    }
    const headerLeave = (e) => {
      if (e.target && e.target.closest && e.target.closest('.close')) return
      cursor.classList.remove('hand')
    }

    header.addEventListener('mouseenter', headerEnter)
    header.addEventListener('mousedown', headerDown)
    header.addEventListener('mouseup', headerUp)
    header.addEventListener('mouseleave', headerLeave)

    // Store for cleanup
    if (!listeners.headerListeners) listeners.headerListeners = []
    listeners.headerListeners.push({ header, headerEnter, headerDown, headerUp, headerLeave })
  })

  // Click spark and sound
  const clickSound = document.querySelector('.click-sound')
  const spark = document.querySelector('click-spark')
  if (spark) {
    listeners.mousedown = (e) => {
      if (clickSound) {
        clickSound.playbackRate = 1.25
        clickSound.currentTime = clickSound.duration / 8
        clickSound.volume = 0.25
        clickSound.play().catch(() => {})
      }
      // Spark animation
      const svg = spark.shadowRoot.querySelector('svg')
      if (!svg) return
      const sparks = [...svg.children]
      const size = 30,
        offset = size / 2 + 'px'
      sparks.forEach((sparkEl, i) => {
        let deg = i * (360 / sparks.length)
        sparkEl.animate(
          [
            {
              strokeDashoffset: size * 3,
              transform: `rotate(${deg}deg) translateY(${offset})`,
            },
            {
              strokeDashoffset: size,
              transform: `rotate(${deg}deg) translateY(0)`,
            },
          ],
          {
            duration: 660,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
            fill: 'forwards',
          }
        )
      })
      // Spark position
      svg.style.left = e.clientX - svg.clientWidth / 2 + 'px'
      svg.style.top = e.clientY - svg.clientHeight / 2 + 'px'
    }
    window.addEventListener('mousedown', listeners.mousedown)
  }
})
</script>

<template>
  <click-spark></click-spark>
  <div class="cursor"></div>
  <audio
    class="click-sound"
    preload="auto"
  >
    <source
      src="../assets/mouse/click.mp3"
      type="audio/mpeg"
    />
  </audio>
</template>

<style>
.cursor {
  z-index: 9999999;
  position: fixed;
  pointer-events: none;
  transform: translate(-30%, -10%);
  width: 24px;
  height: 24px;
  background-image: url('../assets/mouse/mouse.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: none;
}

@media screen and (orientation: portrait) {
  .cursor {
    display: none !important;
  }
}

.enter {
  background-image: url('../assets/mouse/pointer.png') !important;
}
.hand {
  background-image: url('../assets/mouse/drag.png');
}
.drag {
  background-image: url('../assets/mouse/move.png') !important;
}

click-spark {
  display: contents;
}
click-spark svg {
  pointer-events: none;
  position: absolute;
  rotate: -20deg;
  stroke: var(--click-spark-color, currentcolor);
  z-index: 999999;
}
click-spark line {
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  transform-origin: center;
}
</style>
