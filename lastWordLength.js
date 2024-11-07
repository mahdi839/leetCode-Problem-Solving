let lastWord = function(s){
    
    let withoutWhiteSpace = s.trim()
   let converted = withoutWhiteSpace.split(" ")
   let lastStrWord = converted[converted.length-1]
   return lastStrWord.length
}

let s = " mahdi hasan programmer  "
console.log(lastWord(s))

