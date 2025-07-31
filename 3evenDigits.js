function evenDigits (digits){
  for(let i=0;i<digits.length;i++){
    console.log("i" + ""+ i)
    for(let j=0;j<digits.length;j++){
        console.log("j" + ""+ j)
        for(let k=0;k<digits.length;k++){
            console.log("k" + ""+ k)
        }
    }
    
  }
}
let digits = [1,2,3,4];
console.log(evenDigits(digits))