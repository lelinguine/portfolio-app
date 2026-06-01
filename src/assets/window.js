import { getNextZIndex } from './draggable.js'

export function openWindow(id) {
  const icons = document.querySelectorAll('.icons')
  icons.forEach((icon) => {
    icon.querySelector('p').classList.remove('select')
  })

  const targetIcon = document.querySelector(`.icons[data-id="${id}"]`)
  targetIcon.querySelector('p').classList.add('select')

  const windows = document.querySelectorAll('.window')
  windows.forEach((window) => {
    window.querySelector('.header').classList.remove('select')
  })

  const targetWindow = document.querySelector(`.window[data-id="${id}"]`)
  targetWindow.style.display = 'block'
  targetWindow.style.zIndex = getNextZIndex()
  targetWindow.querySelector('.header').classList.add('select')
}
