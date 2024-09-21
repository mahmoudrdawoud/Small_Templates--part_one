let x = document.querySelector("input");

// x.onfocus = function () {
//   x.setAttribute("data", x.getAttribute("placeholder"));
//   x.setAttribute("placeholder", "");
// };

// x.onblur = function () {
//   x.setAttribute("placeholder", x.getAttribute("data"));
//   x.setAttribute("data", "");
// };

x.onfocus = function () {
  "use strict";
  if (this.placeholder === "Type Your Name ") {
    this.placeholder = "";
  }
};

x.onblur = function () {
  "use strict";
  if (this.placeholder === "") {
    this.placeholder = "Type Your Name ";
  }
};
