var shortestCompletingWord = function (licensePlate, words) {

    let alphaWordsExtract = licensePlate.match(/[a-zA-Z]/g)?.join("") || ""
    

};

let licensePlate = "1s3 PSt";
let words = ["step", "steps", "stripe", "stepple"];

console.log(shortestCompletingWord(licensePlate,words))