let arr = ["flower", "flow", "flight"];

function findLongestPrefix(arr) {
  if (arr.length === 0) {
    return "";
  }
  let prefix = arr[0]; // Initialize the prefix variable with the first string of the array and now we check other remaining

  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
}

console.log(findLongestPrefix(arr));
