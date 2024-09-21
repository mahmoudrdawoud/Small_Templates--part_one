let inp = document.querySelector("input");
let textar = document.querySelector("textarea");
let hh = document.querySelector("h2");
let p = document.querySelector("p");

inp.onkeyup = function () {
  "use strict";
  hh.textContent = this.value;
};

textar.onkeyup = function () {
  "use strict";
  p.textContent = this.value;
};

let x = function () {
  inp.onkeyup = function () {
    "use strict";
    hh.textContent = this.value;
  };
  return x;
};
document.body.appendChild(x);

// inp.onkeyup = function () {
//   "use strict";
//   input(this.value, hh);
// };

// textar.onkeyup = function () {
//   "use strict";
//   input(this.value, p);
// };

// function input(value, element) {
//   element.innerText = value;
// }
