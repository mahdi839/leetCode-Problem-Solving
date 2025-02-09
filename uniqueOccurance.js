var uniqueOccurrences = function(arr) {
    let mapArr = new Map();
    for(let num of arr){
        mapArr.set(num,mapArr.get(num)+1 || 1)
    }
    let unique = new Set(mapArr.values())
   
    return unique.size == mapArr.size
};
console.log(uniqueOccurrences([1,2,2,1,1,3]))