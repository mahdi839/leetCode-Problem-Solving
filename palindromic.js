

function palindromicNumber( words){
    words.find((word)=>{
        
        let palindromic = word.split("").reverse().join("");
        
        return word == palindromic
            
        
    })
     return ""
}

 words = ["abc","car","ada","racecar","cool"]
 palindromicNumber(words)