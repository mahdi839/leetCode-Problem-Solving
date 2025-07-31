var checkAlmostEquivalent = function(word1, word2) {
    let countWord1 = new Map ();
    let countWord2 = new Map ();
    
    for (let i =0; i<word1.length;i++){
        countWord1.set(word1[i],(countWord1.get(word1[i]) || 0) +1)
        countWord2.set(word2[i],(countWord2.get(word2[i]) || 0) +1)
    }
   for (let [key,value] of countWord1){
     let val2 = countWord2.get(key) || 0
     if(Math.abs(val2-value)>=4)return false
   }

   for (let [key,value] of countWord2){
    let val1 = countWord1.get(key) || 0
    if(Math.abs(val1-value)>=4)return false
  }
  return true
};

let word1 ="accb" 
let word2 = "aaaa"
console.log(checkAlmostEquivalent(word1,word2))