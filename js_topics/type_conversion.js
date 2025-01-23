let name = "mehedi"
let converted = Number(name)
console.log(converted)

let number = "2.1"
let convertedNum = Number(number);
console.log(typeof convertedNum)

let emptyStr = "";
let convertedEmpty = Number(emptyStr);
console.log( convertedEmpty)


// number methods

let firstNum = "100"
let convertFirst = parseFloat(firstNum)
console.log(convertFirst);

let secondNum = "20"
let convertSecond = parseInt(secondNum)
console.log(convertSecond)

// the unary operator

let unaryStr = "50"
console.log(typeof unaryStr)
let convertedUnary = + unaryStr

console.log( typeof convertedUnary)