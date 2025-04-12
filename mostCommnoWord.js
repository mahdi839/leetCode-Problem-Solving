function mostComm(para,banned){
   
    let pureStr = para.replace(/[<>\[\]!@#$%^&*(),.?":{}|<>]/g, '');
    let strToarr = pureStr.split(" ");
    let getMap = new Map();

    for(let word of strToarr){
        getMap.set(word,getMap.get(word)+1 || 1)
    }
    console.log(getMap)
}

let para = "Bob hit a ball, the hit BALL flew far after it was hit."
let banned = ["hit"]

console.log(mostComm(para,banned))