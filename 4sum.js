var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let result = [];

    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        for(let j=i+1;j<nums.length;j++){
            if(j>i+1 && nums[j] === nums[j-1]) continue;
            let left = j+1;
            let right = nums.length-1;
           while(left<right){
              let allSum = nums[i]+nums[j]+nums[left]+nums[right];
            if(allSum === target){
                result.push([nums[i],nums[j],nums[left],nums[right]])
                while(left<right && nums[left] === nums[left+1])left++
                while(left<right && nums[right] === nums[right-1])right--
                left++
                right--
                
            }else if (allSum < target){
                left++
            }
            else{
                right--
            }
             
           }
        }
    }

    return result;
};




let nums = [2,2,2,2,2]
let target = 8

console.log(fourSum(nums,target))