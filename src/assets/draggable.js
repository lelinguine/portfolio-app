export let currentZIndex = 1;

export function getNextZIndex() {
  return ++currentZIndex;
}

window.onload = function () {
  const popups = document.getElementsByClassName("window");
  let dragEl = null, startX = 0, startY = 0;

  for (let popup of popups) {
    const header = popup.querySelector(".header");
    const closeBtn = popup.querySelector(".close");

    popup.onmousedown = function () {
      this.style.zIndex = getNextZIndex();
      document.querySelectorAll(".header").forEach(h => h.classList.remove("select"));
      if (header) header.classList.add("select");
    };

    if (header) {
      header.onmousedown = function (e) {
        dragEl = popup;
        startX = e.clientX;
        startY = e.clientY;
        document.onmousemove = function (e) {
          if (!dragEl) return;
          dragEl.style.top = dragEl.offsetTop + (e.clientY - startY) + "px";
          dragEl.style.left = dragEl.offsetLeft + (e.clientX - startX) + "px";
          startX = e.clientX;
          startY = e.clientY;
        };
        document.onmouseup = function () {
          dragEl = null;
          document.onmousemove = document.onmouseup = null;
        };
      };
    }

    if (closeBtn) {
      closeBtn.onclick = () => popup.style.display = 'none';
    }
  }
};