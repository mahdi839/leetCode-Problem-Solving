var countWords = function (words1, words2) {
  let count = 0;
  let storeKeys = []
  let words1Obj = new Map;
  let words2Obj = new Map;


  for (let word1 of words1) {
    // words1Obj[word1] = words1Obj[word1] + 1 || 1;
    words1Obj.set(word1,words1Obj.get(word1) +1 || 1)
  }

  for (let word2 of words2) {
    words2Obj.set(word2,words2Obj.get(word2) +1 || 1)
  }

  words1Obj.forEach((value,key)=>{
     if(value=== 1){
        storeKeys.push(key);
     }
  })

  words2Obj.forEach((value,key)=>{
    if(value=== 1){
       storeKeys.push(key);
    }
 })

  for (let i =0; i<storeKeys.length;i++){
      for(let j =i+1;j<storeKeys.length;j++){
         if (storeKeys[i] == storeKeys[j]){
            count ++
         }
      }
  }


  return count;
};

let words1 = ["leetcode", "is", "amazing", "as", "is"];
let words2 = ["amazing", "leetcode", "is"];
console.log(countWords(words1, words2));
