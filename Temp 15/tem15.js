// function redirecMe(url) {
//   "use strick";
//   if (url !== "") {
//     window.location.url = url;
//   }
// }

let btn = document.querySelector("button");

let hub = [
  "https://www.google.com/?hl=ar",
  "https://www.youtube.com/watch?v=FajTRWPdlS4&list=PLDoPjvoNmBAxhsMvDrXldKClH7FdE8WSf&index=15",
  "https://www.facebook.com/",
  "https://twitter.com/MahmoudDaw_2002",
];

let rand = Math.floor(Math.random() * hub.length);

btn.onclick = function () {
  "use strick";
  window.location.href = hub[rand];
};
