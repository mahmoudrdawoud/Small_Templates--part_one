let img = document.querySelector("img");

let arr = [
  "../photo/Animal10.jpg",
  "../photo/Animal2.jpg",
  "../photo/Animal4.png",
  "../photo/Animal5.gif",
  "../photo/Animal6.jfif",
];

function name(img, arr) {
  "use strict";
  setInterval(() => {
    let rand = Math.floor(Math.random() * arr.length);
    img.src = arr[rand];
  }, 3000);
}

name(img, arr);
// window.onload = function () {
//   name(img, arr);
// };
