var mostCommonWord = function(paragraph, banned) {
    
    let pureStr = paragraph.replace(/[,.&%#$@!-+=]/g,'').toLowerCase() 
    let bannedSet = new Set(banned)
    let strToArr = pureStr.split(" ")
    let arrMap = new Map()
    for(let word of strToArr){
        arrMap.set(word,arrMap.get(word)+1||1)
    }
   
   let maxVal =0
   let result = ''
   console.log(arrMap)
   arrMap.forEach((val,key)=>{
      if(val>maxVal && !bannedSet.has(key)){
        maxVal = val
        result = key
      }
   })
   return result;
};

let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
let banned = ["hit"]
console.log(mostCommonWord(paragraph,banned))