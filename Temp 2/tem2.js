function capitlizeLetter(word) {
  let oldArray = word.split(" ");
  let newArray = [];
  for (let i = 0; i < oldArray.length; i++) {
    newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));
  }

  return newArray.join(" ");
}

console.log(capitlizeLetter("elzero web school"));
