
var thirdMax = function (nums){
   nums.sort((a,b)=>b-a)
   let unique = [...new Set (nums)]
   let counter = 0;
   
   if(unique.length>2){
      counter = unique[2]
   }else{
      counter = unique[0]
   }
   return counter;
}




let nums = [1,4,4,3,6] 
console.log(thirdMax(nums)) 

// sorting - 6,5,4,4,1
// unique - 6,5,4,1
// checking - 3 number or big 










