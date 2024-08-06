function rearrangeTheLetter(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortStr1 = str1.split("").sort().join("");
  const sortStr2 = str2.split("").sort().join("");

  return sortStr1 === sortStr2;
}

console.log(rearrangeTheLetter("qwerty", "qerwyt"));
console.log(rearrangeTheLetter("qwertym", "qerwyta"));
console.log(rearrangeTheLetter("qwertym", "qerwytab"));
