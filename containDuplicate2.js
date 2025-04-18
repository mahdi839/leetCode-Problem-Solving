var containsNearbyDuplicate = function(nums, k) {
    
    
    console.log(countSet)
    let left =0;

    for(let i=1;i<nums.length;i++){
        if(nums[left]=== nums[i]){
            if(Math.abs(left - i)<=k){
                return true;
            }
        }
        left++;
        
    }

    return false;

};

let nums = [1,2,3,2,4,5,4] 
let k = 3

console.log(containsNearbyDuplicate(nums,k))