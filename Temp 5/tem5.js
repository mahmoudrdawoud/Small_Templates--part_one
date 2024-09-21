let p = document.getElementById("type");
let btn = document.getElementById("button");

let text = "Mahmoud Riyad Mahmoud Mohammed Ibrahim Dawoud";

let i = 0;

btn.onclick = function () {
  "use strict";

  var time = setInterval(() => {
    p.textContent += text[i];
    i++;

    if (i > text.length - 1) {
      clearInterval(time);
    }
  }, 200);
};
