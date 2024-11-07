let nums = [2,7,11,15];
let target = 6;
let result = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    let sum = nums[i] + nums[j];
    if (sum === target) {
      result = [nums[i], nums[j]];
      console.log(result);
    }
  }
}
let resultIndex = []
for(let n =0; n<nums.length; n++){
    for(let m =0; m<nums.length; m++){
        if (nums[n]== result[m]){
           resultIndex.push(n)
          
           
        }
    
    }
}

console.log(resultIndex)

