var commonChars = function(words) {
    
    let convertedToStr = words.join("")
    let track = []
   
    for(let word of convertedToStr){
        if (words.every((single)=> single.includes(word))){
            track.push(word)
            words = words.map((single)=> single.replace(word,""))
        }
    }

   return track;
};

let words = ["bella","label","roller"]
console.log(commonChars(words))