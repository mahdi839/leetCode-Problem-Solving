function customSort(arr1, arr2) {
    const orderMap = new Map();
    
    arr2.forEach((value,index)=>orderMap.set(value,index))
    arr1.sort((a,b)=>{
        let indexA = orderMap.has(a)?orderMap.get(a):Infinity;
        let indexB = orderMap.has(b)?orderMap.get(b):Infinity;

        return indexA - indexB
    })

    return arr1; 
 
}

const arr1 = [5, 1, 3, 2, 4, 1, 5, 3];
const arr2 = [3, 1, 4, 2];

console.log(customSort(arr1, arr2));
