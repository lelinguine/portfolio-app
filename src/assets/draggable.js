const HEADER_HEIGHT = 38

export let currentZIndex = 1
export function getNextZIndex() {
  return ++currentZIndex
}

function initDraggable() {
  const popups = document.getElementsByClassName('window')
  let dragEl = null,
    startX = 0,
    startY = 0

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
        dragEl = popup
        startX = e.clientX
        startY = e.clientY

        const handleMouseMove = (e) => {
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

        const handleMouseUp = () => {
          dragEl = null
          document.removeEventListener('mousemove', handleMouseMove)
          document.removeEventListener('mouseup', handleMouseUp)
          document.body.removeEventListener('mouseleave', handleMouseLeave)
        }

        const handleMouseLeave = () => {
          dragEl = null
          document.removeEventListener('mousemove', handleMouseMove)
          document.removeEventListener('mouseup', handleMouseUp)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        document.body.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    if (closeBtn) {
      closeBtn.addEventListener('mousedown', (e) => {
        e.stopPropagation()
      })
      closeBtn.addEventListener('click', () => {
        popup.style.display = 'none'
      })
    }
  }
}

window.addEventListener('load', initDraggable)
