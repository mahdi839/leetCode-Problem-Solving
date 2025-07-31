var threeSumClosest = function(nums, target) {
    let closestSum = Infinity;
    nums.sort((a,b)=>a-b)
    for(let i =0;i<nums.length-2;i++){
        let left = i+1
        let right = nums.length-1
        while(left<right){
            let allSum = nums[i]+ nums[left]+ nums[right]
            if(Math.abs(allSum - target) < Math.abs(closestSum-target)){
                closestSum = allSum;
            }
            if(allSum<target){
                left++
            }else if (allSum>target){
                right--
            }else{
                return allSum;
            }

        }
    }
    return closestSum;
};

let nums = [-1,2,1,-4]
let target = 1
console.log(threeSumClosest(nums,target))