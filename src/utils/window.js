import { getNextZIndex } from './draggable.js'

export function openWindow(id, options = {}) {
  const { itemSelector = '.icons', windowId = id, skipIfOpen = false } = options

  // Deselect all items
  const items = document.querySelectorAll(itemSelector)
  items.forEach((item) => {
    item.querySelector('p').classList.remove('select')
  })

  // Select target item
  const targetItem = document.querySelector(`${itemSelector}[data-id="${id}"]`)
  targetItem.querySelector('p').classList.add('select')

  // Get target window
  const targetWindow = document.querySelector(`.window[data-id="${windowId}"]`)

  // Skip if already open (optional)
  if (skipIfOpen && getComputedStyle(targetWindow).display === 'block') {
    return
  }

  // Deselect all window headers
  const windows = document.querySelectorAll('.window')
  windows.forEach((window) => {
    window.querySelector('.header').classList.remove('select')
  })

  // Open and select target window
  targetWindow.style.display = 'block'
  targetWindow.style.zIndex = getNextZIndex()
  targetWindow.querySelector('.header').classList.add('select')
}
