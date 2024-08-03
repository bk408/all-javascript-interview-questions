function reverseString(str) {
  str = str.split("");

  //create a new array to hold the reversed characters

  let holdData = [];

  for (let i = str.length - 1; i >= 0; i--) {
    holdData.push(str[i]);
  }

  // join the reversed array into a string

  return holdData.join("");
}

console.log(reverseString("Hello WorLd"));
