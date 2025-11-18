function reverseStr(str){
  let stack =[];
  for(let char of str){
    stack.push(char)
  }
  let revesedStr = "";
  while(stack.length>0){
   revesedStr += stack.pop();
  }
  return revesedStr;
}
let str = "hello"
console.log(reverseStr(str));