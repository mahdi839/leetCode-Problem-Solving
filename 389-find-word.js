var findTheDifference = function (s, t) {
   let resultMap = new Map();
   for(let char of s){
     resultMap.set(char,(resultMap.get(char)||0)+1)
   }
   for(let char of t){
     if(!resultMap.get(char)){
        return char;
     }
     resultMap.set(char,resultMap.get(char)-1)
   }
};
let s = "ab";
let t = "abc"
console.log(findTheDifference(s, t))