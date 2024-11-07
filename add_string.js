let word = "MahdG"

let firstWord = word[0]


    if(word == word.toLowerCase() || word == word.toUpperCase() || 
       firstWord == word[0].toUpperCase() && word.slice(1) == word.slice(1).toLowerCase() )
    {
        console.log("true")
    }else{
        console.log("false")
    }

// UpperCase - true
// all lowerCase = true
// first Word Capital = true 
// else - false 



