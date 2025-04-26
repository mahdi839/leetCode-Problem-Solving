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

 
  if(letters.length>1){
     let first = letters[0]
     let second = letters[1]
      
    for(let i=0;i<first.length;i++){
        for(let j=0;j<second.length;j++){
            resultArr.push(first[i]+second[j]) 
            
        }
    }
     
  }else{
    return letters.join("").split("")
  }

  return resultArr;
}
const digits = "";
console.log(combOfPhone(digits));
