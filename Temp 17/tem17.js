let count = document.getElementById("countdown");

let sec = 119;

let down = setInterval(() => {
  "use strict";
  secend();
}, 1000);

function secend() {
  "use strict";
  let min = Math.floor(sec / 60);

  let sece = sec % 60;

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sece = "0" + sece;
  }

  count.innerHTML = min + " : " + sece;

  if (sec > 0) {
    sec -= 1;
  } else {
    clearInterval(down);
    count.innerHTML = "Done";
  }
}
