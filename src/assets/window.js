import { getNextZIndex } from './draggable.js';

export function openWindow(index, file, window) {
    const files = document.querySelectorAll('.' + file);
    files.forEach(file => {
        file.querySelector('p').classList.remove('select');
    });

    const targetFile = files[index];
    targetFile.querySelector('p').classList.add('select');

    const windows = document.querySelectorAll('.' + window);
    windows.forEach(window => {
        window.querySelector('.header').classList.remove('select');
    });

    const targetWindow = windows[index];
    targetWindow.style.display = 'block';
    targetWindow.style.zIndex = getNextZIndex();
    targetWindow.querySelector('.header').classList.add('select');
};

export function openFiles(index, file, project) {
    const files = document.querySelectorAll('.' + file);
    files.forEach(file => {
            file.querySelector('p').classList.remove('select');
    });

    const targetFile = files[index];
    targetFile.querySelector('p').classList.add('select');

    const infos = document.querySelector('.infos-container');
    // Charger le template générique
    fetch('/details.html')
        .then(response => response.text())
        .then(html => {
            // Remplacer les variables par les valeurs du projet
            html = html.replace('{{text}}', project.text || '')
                        .replace('{{date}}', project.date || '')
                        .replace('{{link}}', project.link || '');
            infos.innerHTML = html;
        })
        .catch(() => {
            infos.innerHTML = '<p>Error.</p>';
        });
}