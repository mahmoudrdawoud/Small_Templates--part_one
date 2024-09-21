let textar = document.getElementById("text");
let sp = document.getElementById("count");
let numsp = textar.getAttribute("maxlength");

textar.oninput = function () {
  sp.innerHTML = numsp - this.value.length;

  if (sp.innerHTML == 0) {
    sp.classList.add("zero");
  } else {
    sp.classList.remove("zero");
  }
};
