var sortArrayByParity = function(nums) {
    
    let evenNum = []
    let odd = []
    for(let num of nums){
        if(num % 2 == 0){
            evenNum.push(num)
        }else{
            odd.push(num)
        }
    }
   let result = evenNum.concat(odd)
   return result
};

let nums = [0]
console.log(sortArrayByParity(nums))