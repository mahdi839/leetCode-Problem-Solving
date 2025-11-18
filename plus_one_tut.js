var plusOne = function(digits) {
    for(let i = digits.length-1;i>=0; i--){
       if(digits[i]<9){
         digits[i]++
         return digits;
       }else{
          digits[i] = 0
       }
    }
    digits.unshift(1);
    return digits;
};

let digits = [1,2,9]; 0        [1,0,0,0] 
console.log(plusOne(digits));
