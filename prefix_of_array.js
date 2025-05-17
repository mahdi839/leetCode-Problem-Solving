function prefix_of_arr(s,words){
  let prefix = [];
    for(let i=0;i<words.length;i++){
       prefix.push(words[i]);
       if(s==prefix.join("")){
        return true;
       }

    }
    return false;
    
}
let s = "iloveleetcode"
let words = ["i","love","leetcode"]
console.log(prefix_of_arr(s,words))