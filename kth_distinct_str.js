function getStr (arr,k){
   let CountArr = new Map();
   for (let i=0; i<arr.length; i++){
     if(CountArr.has(arr[i])){
       let existing = CountArr.get(arr[i])
       CountArr.set(arr[i],{count:existing.count+1,index:existing.index})
     }else{
       CountArr.set(arr[i],{count:1,index:i})
     }
   }
   const kthVal = []
  CountArr.forEach((value,key) => {
    
      if(value.count ===1){
        kthVal.push(key)
      }
  });
  if(kthVal.length<k){
    return ""
  }
 else{
    return kthVal[k-1]
  }
  
}
let arr = ["d","b","c","b","c","a"] 
let k = 2
console.log(getStr(arr,k))
