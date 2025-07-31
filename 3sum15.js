function threeSum (nums){
    nums.sort((a,b)=>a-b);
    let result = [];
    let n = nums.length;
    
    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        let left = i+1;
        let right = n-1;
        let target = -nums[i]
       

        while(left<right){
            let currentSum = nums[left] + nums[right];
            if(currentSum === target){
                result.push([nums[i],nums[left],nums[right]]);
                while(left<right && nums[left]=== nums[left+1])left++
                while(left<right && nums[right]=== nums[right-1])right--
                left++
                right++
            }else if (currentSum<target){
                left++
            }
            else{
                right--
            }
        }
    }
    return result;
}

let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))