

// using for loop method
function checkPalindrome(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    // compare the characters from start to end

    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(checkPalindrome("Hello"));
console.log(checkPalindrome("dad"));

/**
 * str[i] accesses the character from the start.
str.length - 1 - i calculates the corresponding character from the end.
This way, str[i] and str[str.length - 1 - i] are compared to check if they match.
 */
