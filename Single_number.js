let  nums = [4,1,2,1,2]
let unique = new Set (nums)
for(let i =1; i<nums.length;i++){
    if(nums[i].length == 2){
        console.log(nums[i])
    }
}