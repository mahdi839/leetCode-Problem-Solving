var validPalindrome = function (s) {
  let convertedToArr = s.split("");
  let reversedStr = convertedToArr.reverse().join("");
  if (s === reversedStr) {
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    let convertedToArr2 = s.split("");
    let popepItem = convertedToArr2.pop();
    if (convertedToArr2 !== reversedStr) {
      convertedToArr = convertedToArr2 + popepItem;
    } else if (convertedToArr2 == reversedStr) {
      return true;
    }
  }

  return false;
};

const s = "abca";
console.log(validPalindrome(s));
