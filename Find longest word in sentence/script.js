// split.reduce method

/* function findLongestword(str) {
     return str.split(" ").reduce((acc, currentVal) => {
      return currentVal.length > acc.length ? currentVal : acc
  })

} */

//  split.sort method
/* function findLongestword(str) {
  let words = str.split(" ");
  words.sort((a, b) => b.length - a.length)
  return words[0]
  } */

// without built-in method => for-loop

function findLongestword(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(findLongestword("The quick brown fox jumped over the laziest dog"));
