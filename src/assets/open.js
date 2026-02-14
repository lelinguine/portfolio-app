export function openFiles(index, file, project) {
  const files = document.querySelectorAll('.' + file)
  files.forEach((file) => {
    file.querySelector('p.text').classList.remove('select')
  })

  const targetFile = files[index]
  targetFile.querySelector('p.text').classList.add('select')

  const infos = document.querySelector('.infos-container')
  fetch('/details.html')
    .then((response) => response.text())
    .then((html) => {
      html = html
        .replace('{{text}}', project.text || '')
        .replace('{{date}}', project.date || '')
        .replace('{{link}}', project.link || '')
      infos.innerHTML = html
      // const projectFile = '/projects/' + (project.text || '').toLowerCase() + '/description.html';
      // fetch(projectFile)
      //     .then(res => res.text())
      //     .then(descriptionHtml => {
      //         html = html.replace('{{description}}', descriptionHtml);
      //         infos.innerHTML = html;
      //     })
      //     .catch(() => {
      //         html = html.replace('{{description}}', '');
      //         infos.innerHTML = html;
      //     });
    })
    .catch(() => {
      infos.innerHTML = '<p>No selected file.</p>'
    })
}
