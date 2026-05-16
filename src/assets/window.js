import { getNextZIndex } from './draggable.js'

export function openWindow(id, file, window) {
  const files = document.querySelectorAll('.' + file)
  files.forEach((file) => {
    file.querySelector('p').classList.remove('select')
  })

  const targetFile = document.querySelector(`.${file}[data-id="${id}"]`)
  targetFile.querySelector('p').classList.add('select')

  const windows = document.querySelectorAll('.' + window)
  windows.forEach((window) => {
    window.querySelector('.header').classList.remove('select')
  })

  const targetWindow = document.querySelector(`.${window}[data-id="${id}"]`)
  targetWindow.style.display = 'block'
  targetWindow.style.zIndex = getNextZIndex()
  targetWindow.querySelector('.header').classList.add('select')
}
