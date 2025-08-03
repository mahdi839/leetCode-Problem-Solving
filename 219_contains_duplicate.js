var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    let nearDuplicate = Infinity;
    for(let i=0;i<nums.length;i++){
       
        if(map.has(nums[i])){
           let prevElm =  map.get(nums[i])
           
           if(Math.abs(prevElm - i)<=k){
            return true
           }
        }
        map.set(nums[i],i)
    }

    return false
     
};
let nums = [1,0,1,1]
let  k = 1
console.log(containsNearbyDuplicate(nums,k))