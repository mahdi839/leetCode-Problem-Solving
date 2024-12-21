
let removeDuplicates = function (x){
   
    let pointer = 0

    for (let i = 1; i<x.length;i++){
        if(x[i] !== x[pointer]){
           
            pointer ++;
            console.log("pointer index" +" " + pointer)
            console.log("loop index "  + " " + [i])
            x[pointer] = x[i]
        }
    }

    return x.slice(0,pointer + 1);

}
// iteration 1 
// [1,2,2,2,3,4,5,6,7]
// iteration 2
// [1,2,2,2,3,4,5,6,7]


const x = [1,2,2,2,3,4,5,6,7]
console.log(removeDuplicates(x))