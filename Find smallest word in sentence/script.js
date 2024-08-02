// split.reduce method
function smallestValue(str) {
  let words = str.split(" ");

  return words.reduce((acc, comm) => {
    return comm.length < acc.length ? comm : acc;
  });
}

console.log(smallestValue("Ich bin bhavya wie Geht's ae"));

// split.sort method
function findSmallValue(str) {
  let words = str.split(" ").sort((a, b) => a.length - b.length);
  return words[0];
}
console.log(findSmallValue("Ich bin bhavya wie Geht's ae"));

// for-loop method => without using in-built method

function findSmallestValue(str) {
  let strWords = str.split(" ");
  let smallWord = strWords[0];

  for (let i = 0; i < strWords.length; i++) {
    if (strWords[i].length < smallWord.length) {
      smallWord = strWords[i];
    }
  }
  return smallWord;
}

console.log(findSmallestValue("Ich bin bhavya wie Geht's ae"));
