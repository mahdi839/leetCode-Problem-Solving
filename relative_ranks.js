var findRelativeRanks = function(score) {
    
   let sorted = score.sort((a,b)=>b-a)
   
   for(let num of sorted){
      if(sorted.indexOf(num) === 0){
         sorted[0] = "Gold Medal";
      }else if (sorted.indexOf(num)===1){
        sorted[1] = "Silver Medal"
      }else if (sorted.indexOf(num)===2){
        sorted[2] = "Bronze  Medal"
      }else{
        num.toString()
      }
   }
  
   console.log(sorted)
    

};

let score = [5,4,3,2,1]
console.log(findRelativeRanks(score))