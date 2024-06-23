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
        // window.style.display = 'none';
    });

    const targetWindow = windows[index];
    targetWindow.style.display = 'block';
    targetWindow.querySelector('.header').classList.add('select');
};