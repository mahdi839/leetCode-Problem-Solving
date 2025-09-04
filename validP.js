let isValid = function (s){
  let stack = [];
  const brackets = {
    ")":"(",
    "}":"{",
    "]":"[",
  }
  const opening = new Set(['(','{','[']);
  for(let char of s){
     if(opening.has(char)){
        stack.push(char)
     }else if (brackets[char]){
        if(stack.length===0 || stack[stack.length-1]!==brackets[char]){
            return false
        }
        stack.pop();
     }
  }
  return stack.length === 0;
}
const s = "({[]})"
console.log(isValid(s))