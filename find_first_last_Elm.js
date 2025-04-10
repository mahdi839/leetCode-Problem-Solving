var searchRange = function(nums, target) {
    
    function findFirst(){
        let left = 0;
        let right = nums.length-1;
        let result = -1;
        while(left<=right){
            let mid = Math.floor((left+right)/2)
            if(nums[mid]==target){
                result = mid;
                right = mid-1
            }else if(nums[mid]<target){
                left = mid+1
            }else {
                right = mid-1
            }
        }
        return result;
    }

    function findLast(){
        let left = 0;
        let right = nums.length-1;
        let result = -1;
        while(left<=right){
            let mid = Math.floor((left+right)/2)
            if(nums[mid]==target){
                result = mid;
                left = mid+1
            }else if(nums[mid]<target){
                left = mid+1
            }else {
                right = mid-1
            }
        }
        return result;
    }
   let first = findFirst() 
   let last = findLast() 

   return [first,last]
};

let nums = [8,8,8,8,10]
let target = 8

console.log(searchRange(nums,target))


