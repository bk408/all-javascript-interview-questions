function characterCount(str, char) {
  return str.split(char).length - 1;
}

console.log(characterCount("Satnam Shri Waheguru Ji", "a"));
console.log(characterCount("Satnam Shri Waheguru Ji", "i"));
console.log(characterCount("Satnam Shri Waheguru Ji", "u"));
