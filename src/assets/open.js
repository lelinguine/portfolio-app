// export function openFile(index, file, project) {
//   const files = document.querySelectorAll('.' + file)
//   files.forEach((file) => {
//     file.querySelector('p.text').classList.remove('select')
//   })

//   const targetFile = files[index]
//   targetFile.querySelector('p.text').classList.add('select')

//   const infos = document.querySelector('.infos-container')
//   fetch('/details.html')
//     .then((response) => response.text())
//     .then((html) => {
//       html = html
//         .replace('{{text}}', project.text || '')
//         .replace('{{date}}', project.date || '')
//         .replace('{{link}}', project.link || '')
//       infos.innerHTML = html
//       // const projectFile = '/projects/' + (project.text || '').toLowerCase() + '/description.html';
//       // fetch(projectFile)
//       //     .then(res => res.text())
//       //     .then(descriptionHtml => {
//       //         html = html.replace('{{description}}', descriptionHtml);
//       //         infos.innerHTML = html;
//       //     })
//       //     .catch(() => {
//       //         html = html.replace('{{description}}', '');
//       //         infos.innerHTML = html;
//       //     });
//     })
//     .catch(() => {
//       infos.innerHTML = '<p>No selected file.</p>'
//     })
// }

import { getNextZIndex } from './draggable.js'

export function openFileWindow(id) {
  const files = document.querySelectorAll('.file')
  files.forEach((file) => {
    file.querySelector('p').classList.remove('select')
  })

  const targetFile = document.querySelector(`.file[data-id="${id}"]`)
  targetFile.querySelector('p').classList.add('select')

  const targetWindow = document.querySelector('.window[data-id="project"]')

  if (getComputedStyle(targetWindow).display === 'block') {
    return
  }

  const windows = document.querySelectorAll('.window')
  windows.forEach((window) => {
    window.querySelector('.header').classList.remove('select')
  })

  targetWindow.style.display = 'block'
  targetWindow.style.zIndex = getNextZIndex()
  targetWindow.querySelector('.header').classList.add('select')
}
