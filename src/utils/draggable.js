// Minimum top position
const HEADER_HEIGHT = 38
const DRAG_DELAY = 100 // ms

// Current highest z-index
export let currentZIndex = 1

export function getNextZIndex() {
  return ++currentZIndex
}

function initDraggable() {
  const popups = document.getElementsByClassName('window')
  let dragEl = null
  let startX = 0
  let startY = 0
  let dragTimeout = null

  for (let popup of popups) {
    const header = popup.querySelector('.header')
    const closeBtn = popup.querySelector('.close')

    popup.addEventListener('mousedown', function () {
      this.style.zIndex = getNextZIndex()
      document.querySelectorAll('.header').forEach((h) => h.classList.remove('select'))
      if (header) header.classList.add('select')
    })

    if (header) {
      header.addEventListener('mousedown', function (e) {
        if (e.target?.closest?.('.close')) {
          return
        }

        startX = e.clientX
        startY = e.clientY

        // Attend avant d'activer le drag
        dragTimeout = setTimeout(() => {
          dragEl = popup
          dragEl.classList.add('dragging')
        }, DRAG_DELAY)

        const handleMouseMove = (e) => {
          // Pas encore activé
          if (!dragEl) return

          let newTop = dragEl.offsetTop + (e.clientY - startY)
          let newLeft = dragEl.offsetLeft + (e.clientX - startX)

          newTop = Math.max(
            HEADER_HEIGHT,
            Math.min(newTop, window.innerHeight - dragEl.offsetHeight)
          )

          newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - dragEl.offsetWidth))

          dragEl.style.top = newTop + 'px'
          dragEl.style.left = newLeft + 'px'

          startX = e.clientX
          startY = e.clientY
        }

        const stopDragging = () => {
          clearTimeout(dragTimeout)

          if (dragEl) {
            dragEl.classList.remove('dragging')
          }

          dragEl = null

          document.removeEventListener('mousemove', handleMouseMove)
          document.removeEventListener('mouseup', stopDragging)
          document.body.removeEventListener('mouseleave', stopDragging)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', stopDragging)
        document.body.addEventListener('mouseleave', stopDragging)
      })
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        popup.style.display = 'none'
      })
    }
  }
}

window.addEventListener('load', initDraggable)
