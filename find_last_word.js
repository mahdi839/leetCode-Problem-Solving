function last_word(s){
    let pure_str = s.trim();
    let convertToArr = pure_str.split(" ")
    return convertToArr[convertToArr.length-1].length
}
const s = "   fly me   to   the moon  "
console.log(last_word(s))