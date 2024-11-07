
var heightChecker = function(heights) {
 let expected = [...heights].sort((a,b)=> a-b)
 let counter = 0;
  for(let i =0;i<heights.length;i++){
     if(heights[i] != expected[i]){
      counter++
     }
  }
  return counter;
   
};

let heights = [1,1,4,5,7,6]
 //expected = [1,1,4,5,6,7]  
            

console.log(heightChecker(heights))