var sumOfGoodNumbers = function(nums, k) {
    let goodNumbers = []

    for(let i=0;i<nums.length;i++){
        let compareableElmSum = i+k;
        let compareableElmSub = i-k;
        
        if(nums[compareableElmSub] && nums[compareableElmSum]){
            if(nums[i]>nums[compareableElmSub] && nums[i]>nums[compareableElmSum] ){
                goodNumbers.push(nums[i])
            }
        }else if(nums[compareableElmSub] || nums[compareableElmSum]){
            if(nums[i]>nums[compareableElmSub] || nums[i]>nums[compareableElmSum] ){
                goodNumbers.push(nums[i])
            }
        }
        else{
            goodNumbers.push(nums[i])
        }

       
    }

   let count =0;
   for(let j=0;j<goodNumbers.length;j++){
      count += goodNumbers[j]
   }

  return count;
};

let nums = [1,3,2,1,5,4]
let  k = 2

console.log(sumOfGoodNumbers(nums,k))