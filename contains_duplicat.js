let  nums = [0,1,2,3,4,0,0,7,8,9,10,11,12,0]
let k = 1
let finalResult;
let checkDuplicate;
   for(let i=0;i<nums.length;i++){
       for(let j = i+1; j<nums.length;j++){
       
           if(nums[i]==nums[j]){
            
          
           let checkDuplicate = Math.abs(j - i);
              
               if(checkDuplicate<=k){
                finalResult = true;
            }else{
                finalResult = false
            }
           }
       }
   }
   
   
  console.log(finalResult)