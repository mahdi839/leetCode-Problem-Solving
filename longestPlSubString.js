function getResult (s){
    let subStrings = [];
    let palindroms = [];

    for(let start=0;start<s.length;start++){
         for(let end=start+1;end<=s.length;end++){
            subStrings.push(s.slice(start,end))
         }
    }
    for(let i=0;i<subStrings.length;i++){
        let check = subStrings[i].split("").reverse().join("")
        if(check === subStrings[i]){
            palindroms.push(subStrings[i].split("").reverse().join(""))
        }
    }
   let longestPal = palindroms[0]
   for(let l =0;l<palindroms.length;l++){
      if(palindroms[l].length > longestPal.length ){
        longestPal = palindroms[l]
      }
   }
   return longestPal;
}
let s = "babad";
console.log(getResult(s))