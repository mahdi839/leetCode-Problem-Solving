var backspaceCompare = function(s, t) {
    let stackS = [];
    let stackT = []
    for(let i=0;i<s.length;i++){
        if(s[i]==="#"){
            stackS.pop();
        }else{
            stackS.push(s[i])
        }
    }
    for(let j=0;j<t.length;j++){
        if(t[j]==="#"){
            stackT.pop();
        }else{
            stackT.push(t[j])
        }
    }
  if(stackS.join("")=== stackT.join("")){
    return true
  }
  return false;
};




let s = "xywrrmp"
let t = "xywrrmu#p"
console.log(backspaceCompare(s,t))