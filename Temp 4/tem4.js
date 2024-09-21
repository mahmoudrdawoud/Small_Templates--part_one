let inp = document.body.getElementById("my-input");

// inp.onfocus = function () {
//   this.setAttribute("data-place", this.getAttribute("placeholder"));
//   this.setAttribute("placeholder", "");
// };

// inp.onblur = function () {
//   this.setAttribute("placeholder", this.getAttribute("data-place"));
//   this.setAttribute("data-place", "");
// };
inp.oninput = function () {
  inp.setAttribute("data-place", this.getAttribute("placeholder"));
  inp.setAttribute("placeholder", "");
};

inp.onblur = function () {
  inp.setAttribute("placeholder", this.getAttribute("data-place"));
  inp.setAttribute("data-place", "");
};

// if (inp.oninput()) {
//   inp.setAttribute("data-place", this.getAttribute("placeholder"));
//   inp.setAttribute("placeholder", "");
// } else if (inp.onblur()) {
//   inp.setAttribute("placeholder", this.getAttribute("data-place"));
//   inp.setAttribute("data-place", "");
// }
