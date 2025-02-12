var isPrefixOfWord = function(sentence, searchWord) {
    let searchWordIndex = sentence.indexOf( searchWord)
    let converted = sentence.split(" ");
    let resultArr = ""
    for(word of converted){
        if(sentence.indexOf(word) === searchWordIndex){
           resultArr = word
        }
    }
   
    return converted.indexOf(resultArr)+1;
};


let sentence = "i love burger eating burger amar"
let searchWord = "burg"
console.log(isPrefixOfWord(sentence,searchWord))
// console.log("index" + sentence.indexOf( searchWord))
// let converted = sentence.split(" ");

// for(word of converted){
//    if(sentence.indexOf(word) == 14){
//        console.log("result" + word)
//    }
// }
// let val = sentence.search(searchWord)
// console.log(val)