var maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    let n = nums.length;
   let largest1 = nums[n-1] * nums[n-2] * nums[n-3]
   let largest2 = nums[0] * nums[1] * nums[n-1]
   return Math.max(largest1,largest2);
}

let nums = [-10,-10,4,5,10,9] 
// -10,-10,-9,4,5,9,10 
console.log(maximumProduct(nums));

