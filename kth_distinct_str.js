function getStr (arr,k){
   let CountArr = new Map();
   for (let i=0; i<arr.length; i++){
     CountArr.set(arr[i],{count:CountArr.get(arr[i]) +1|| 1,index:i})
   }
   console.log(CountArr)
}
let arr = ["d","b","c","b","c","a"] 
let k = 2
console.log(getStr(arr,k))
