// let recursion = function (n) {
    
    
//     if (n < 0)return 0;

//     return n + recursion(n - 1);

   
// }

// console.log(recursion(5))

let recursion = function (n) {
    if (n > 10) return 0;  

    return n + recursion(n + 1);  
}

console.log(recursion(5));  
