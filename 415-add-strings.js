function addStrings(num1, num2) {
   let i = num1.length-1;
   let j = num2.length-1;
   let carry = 0;
   let result = '';
   while(i>=0 || j>=0 || carry>0){
     let digit1 = num1[i]?Number(num1[i]):0;
     let digit2 = num2[j]?Number(num2[j]):0;
     let sum = digit1 + digit2 + carry;
     carry = Math.floor(sum/10);
     let currentDigit = sum %10
     result = currentDigit + result;
     i--
     j--
   }
   return result;
}

// Example usage:
let num1 = "123";
let num2 = "77";
console.log(addStrings(num1, num2)); // Output: "200"

