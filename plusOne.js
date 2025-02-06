var plusOne = function (digits) {
  
  for (let i = digits.length-1;i>=0;i--){
      digits[i]+=1
     
      if(digits[i] == 10){
         digits[i] = 0
      }else{
          return digits;
      }
  }
  digits.unshift(1);
  return digits;
};

let digits = [9,9,9];

console.log(plusOne(digits));

let bigNum = BigInt(123)
console.log(typeof bigNum)
