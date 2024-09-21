if (window.location.hash) {
  //   if (window.location.hash.indexOf("osama") === 1) {

  let x = window.location.hash.substring(1);

  if (x === "osama") {
    console.log("tu");
  } else {
    console.log("ut");
  }
}
