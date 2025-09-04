function removeDuplicate (s){
    const stack = [];
    for(let char of s){
        if(stack[stack.length -1]=== char){
            stack.pop();
        }else{
            stack.push(char)
        }
    }
    return stack.join("")
}

const s = "abbaca"
console.log(removeDuplicate(s))