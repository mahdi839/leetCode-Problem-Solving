function combOfPhone(digits) {
  const digitToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let letters = [];
  let resultArr = []
  if (digits.length > 0) {
    for (let digit of digits) {
      letters.push(digitToLetters[digit]);
    }
  } else {
    return [];
  }

//  console.log("letters" +" " + letters.join("").slice(letters[0].length))
  if(letters.length>1){
     let first = letters[0] 
     let restOfDigit = letters.join("").slice(letters[0].length)
    
   for(let j =0;j<first.length;j++){
    for(let i=0;i<restOfDigit.length;i++){
       resultArr.push(first[j]+restOfDigit[i])
    }
   }
     
  }else{
    return letters.join("").split("")
  }

  return resultArr;
}
const digits = "234";
console.log(combOfPhone(digits));
