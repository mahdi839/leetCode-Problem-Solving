let reverseOnlyLetters = function (s) {
    let letters = s.match(/[a-zA-Z]/g)
   
    let result = s.split("").map((char)=>{
        if(/[a-zA-Z]/.test(char)){
            return letters.pop();
        }
        return char;
    }).join("")
    
    return result;
};

let s = "Test1ng-Leet=code-Q!";
console.log(reverseOnlyLetters(s));
