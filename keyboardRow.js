var findWords = function(words) {
    const rows = [
        new Set("qwertyuiop"),
     new Set("asdfghjkl"),
     new Set("zxcvbnm")
    ]
    
    return words.filter((word)=>{
        let lowerWord = word.toLowerCase();
        console.log(lowerWord)
        let row = rows.find(row => row.has(lowerWord[0]))
        return [...lowerWord].every(char=> row.has(char))
    })
};

let words = ["Hello","Alaska","Dad","Peace"]

console.log(findWords(words))