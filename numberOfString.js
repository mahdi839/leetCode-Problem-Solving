var numOfStrings = function(patterns, word) {
    let count = 0;

    for (let singlePat of patterns){
        if(word.match(singlePat)){
            count++
        }
    }
    return count;
};

let patterns = ["a","abc","bc","d"];
let  word = "abc";

console.log(numOfStrings(patterns,word))

