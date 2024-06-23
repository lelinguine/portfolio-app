window.onload = function() {
  initDragElement();
};

function initDragElement() {
  var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
  var popups = document.getElementsByClassName("window");
  var elmnt = null;
  var currentZIndex = 1;

  for (var i = 0; i < popups.length; i++) {
    var popup = popups[i];
    var header = getHeader(popup);
    var closeBtn = getCloseButton(popup);

    popup.onmousedown = function(e) {
      this.style.zIndex = "" + ++currentZIndex;

      header = getHeader(this);
      var headers = document.getElementsByClassName("header");
      for (var j = 0; j < headers.length; j++) {
        headers[j].classList.remove("select");
      }
      if (header) {
        header.classList.add("select");
      }
    };

    if (header) {
      header.parentPopup = popup;
      header.onmousedown = dragMouseDown;
    }

    if (closeBtn) {
      closeBtn.onclick = function() {
        this.parentElement.parentElement.style.display = 'none';
      };
    }
  }

  function dragMouseDown(e) {
    elmnt = this.parentPopup;

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    if (!elmnt) {
      return;
    }

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function getHeader(element) {
    var headerItems = element.getElementsByClassName("header");

    if (headerItems.length === 1) {
      return headerItems[0];
    }

    return null;
  }

  function getCloseButton(element) {
    var closeItems = element.getElementsByClassName("close");

    if (closeItems.length === 1) {
      return closeItems[0];
    }

    return null;
  }
}