let hh = document.querySelector("h2");
let p = document.querySelector("p");

var chs = ["class-one", "class-two", "class-three", "class-four"];
var rand = Math.floor(Math.random() * chs.length);

document.body.setAttribute("class", chs[rand]);
