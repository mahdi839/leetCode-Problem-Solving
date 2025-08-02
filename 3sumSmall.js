
function sumSmaller (nums,target){
     nums.sort((a,b)=>a-b);
     let count = 0;
     for(let i=0;i<nums.length;i++){
        let left = i+1;
        let right = nums.length-1
        while(left<right){
            let sum = nums[i]+nums[left]+nums[right]
            if(sum<target){
                count = right - left
            }
        }
     }
     return count;
}


let nums = [-2, 0, 1, 3]
let target = 2
console.log(sumSmaller(nums,target))