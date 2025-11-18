
var moveZeroes = function(nums) {
   let pos =0;
   let i =0;
   for(let num of nums){
     
     if(num!=0){
        console.log(num)
        nums[pos] = num
         pos++
     }
    }
    
     while(pos<nums.length){
        nums[pos] =0;
        pos++
     }

     return nums;

};

let nums = [0,1,0,3,12];
console.log(moveZeroes(nums))