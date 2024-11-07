let x = 121
let convertedNum = x.toString().split("").reverse()
let updatedArray = convertedNum.join("")
let updatedArrayToNum = Number(updatedArray)

if(x==updatedArrayToNum){
    console.log(true)
}else{
    console.log(false)
}

