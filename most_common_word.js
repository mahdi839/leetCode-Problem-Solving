var mostCommonWord = function(paragraph, banned) {
    let cleanStr = paragraph.replace(/[<>\[\]!@#$%^&*(),.?":{}|<>]/g, '');
    
    let strToArr = cleanStr.split(' ')
    console.log(strToArr)

};
let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
let banned = ["hit"]
console.log(mostCommonWord(paragraph, banned))

let name = "mahdi hasan"