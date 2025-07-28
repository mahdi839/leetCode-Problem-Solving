function sum (numbers,target){
   left = 0;
   right =numbers.length - 1;
   while(left<right){
     let twoSum = numbers[left]+numbers[right];
     if(twoSum === target){
        return [left+1,right+1]
     }else if (twoSum > target){
        right --;
     }else{
        left++
     }
   }
}

let numbers = [2,7,11,17]
let target = 28
console.log(sum(numbers,target)); 