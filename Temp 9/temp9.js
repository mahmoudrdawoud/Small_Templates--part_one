var textar = document.getElementById("my-text");
var sp = document.getElementById("my-span");

textar.onkeyup = function () {
  "use strict";
  sp.textContent = 50 - this.value.length;
  if (sp.textContent < 0) {
    sp.style.color = "#F00";
  } else {
    sp.style.color = "#000";
  }
};
