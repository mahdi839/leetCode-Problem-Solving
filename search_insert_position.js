

function searchInsert(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            
            return i; 
             // This immediately stops the loop and returns the index.
        }
    }
    return nums.length;  // If target is greater than all elements, return the last index.
}
let nums = [1,3,4,6]
let target = 5
console.log(searchInsert(nums,target))

