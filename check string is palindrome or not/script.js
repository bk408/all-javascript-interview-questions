// Using in-built methods
/*function checkPalindrome(str) {
  str = str.trim().toLowerCase();

  let reversedStr = str.split("").reverse().join("");

  return reversedStr;
}

console.log(checkPalindrome("Hello"));
console.log(checkPalindrome("dad")); */


//  using while loop
function checkPalindrome(str) {
  // convert to lowerCase so we can make this in-sensitive
  str = str.toLowerCase();

  // Initialize the pointers for start and end
  let start = 0;
  let end = str.length - 1;

  // loop until the pointers meet in center
  while (start < end) {
    // check if the character at the current pointer are equal or not
    if (str[start] !== str[end]) {
      return false; // if mismatch found or if it is not palindrome then return false
    }

    // if it is true then move the pointers
    start++;
    end--;
  }

  return true;
}

console.log(checkPalindrome("Hello"));
console.log(checkPalindrome("dad")); 


// using for loop available in index.js
