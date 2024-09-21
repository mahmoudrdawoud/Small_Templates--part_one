document.body.classList.add(localStorage.getItem("pageColor") || "red");

var ele = document.querySelectorAll(".color-switcher li");

var classList = [];

for (var i = 0; i < ele.length; i++) {
  classList.push(ele[i].getAttribute("data-color"));

  ele[i].addEventListener(
    "click",
    function () {
      document.body.classList.remove(...classList);
      document.body.classList.add(this.getAttribute("data-color"));
      localStorage.setItem("pageColor", this.getAttribute("data-color"));
    },
    false
  );
}
