let currentChar = 0;
function stringCounter(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      currentChar++;
    }
  }
  return currentChar;
}

console.log(stringCounter("Satnam shri waheguru ji", "i"));
