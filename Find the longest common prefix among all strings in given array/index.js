//let str = ["flower", "ow", "flight"];
let str = ["flower", "flow", "flight", "fling", "flush"];

function commonPrefix(str) {
  if (str.length === 0) {
    return "";
  }
  let prefix = str[0];

  for (let i = 1; i < str.length; i++) {
    while (str[i].indexOf(prefix) !== 0) {
      // If the value is not matched with prefix value then it shortens the value by 1 and check again
      prefix = prefix.substring(0, prefix.length - 1);

      // if there is no value is matched with prefix then
      if (prefix === "") {
        console.log("There is no prefix");
        
      }
    }
  }
  return prefix;
}

console.log(commonPrefix(str));
