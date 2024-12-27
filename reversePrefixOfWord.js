var reversePrefix = function(word, ch) {
   
    let searchResult = word.search(ch)
    console.log(searchResult)
    if(searchResult){
 
      let FistWords = word.slice(0,searchResult + 1)
      console.log(FistWords)
      let lastWords = word.slice(searchResult+1, word.length)
     let reversed =  FistWords.split("").reverse().join("")
 
     return reversed + lastWords;
 
    }
 
    return word;
 
 };

  word = "abcdefd", ch = "d"

  console.log(reversePrefix(word,ch))