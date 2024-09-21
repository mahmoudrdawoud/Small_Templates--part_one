let inp = document.getElementById("my-input");

let btn = document.getElementById("my-button");

btn.onclick = function () {
  "use strict";
  if (this.textContent === "Show Password") {
    inp.setAttribute("type", "text");
    this.textContent = "Hide Password";
  } else {
    inp.setAttribute("type", "password");
    this.textContent = "Show Password";
  }
};
