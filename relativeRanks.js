var findRelativeRanks = function(score) {
   let sortedArr = [...score].sort((a,b)=> b-a)
   let sortedObj = {}
   sortedArr.forEach((val,index)=>{
       if(index == 0) sortedObj[val] = 'gold medal';
       else if(index == 1) sortedObj[val] = 'silver medal';
       else if(index == 2) sortedObj[val] = 'bronze medal';
       else sortedObj[val] = (index + 1).toString()
   }) 

   let result = score.map((val)=> sortedObj[val])
   return result;
};


let score = [5,3,2,1,4]
console.log(findRelativeRanks(score))