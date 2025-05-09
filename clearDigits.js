var clearDigits = function(s) {
    let stack = [];
    for(let digit of s){
        if(stack.length>0 && /[0-9]/.test(digit)){
            stack.pop()
        }else{
            stack.push(digit)
        }
    }
    
    return stack.length===0?stack.join(): stack.join("")
 
};
let s = "abc";

console.log(clearDigits(s))