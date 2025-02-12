let sentence = "i love eating burger"
let  searchWord = "burg"
let converted = sentence.split(" ");

for(word of converted){
    console.log(word)
}
let val = sentence.search(searchWord)
console.log(val)