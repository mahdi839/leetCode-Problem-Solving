var reverseStr = function(s, k) {
    let arr = s.split("");
    for(let start =0; start < s.length; start+=2*k){
        console.log(Math.min(start + k - 1, s.length - 1))
    }

};

let s = "abcdefg"
let k = 2

console.log(reverseStr(s,k))