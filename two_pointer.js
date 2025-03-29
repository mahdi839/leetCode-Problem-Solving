// function twoPointer(str){
//     let left = 0;
//     let right = str.length -1

//     while(left<right){
//         if(str[left]== str[right]) {
//             return true
//         }else{
//             return false;
//         }
//         left++;
//         right--;
//     }
    
// }  

// console.log(twoPointer("tat"))

function reverseArr (arr){
    let left = 0;
    let right = arr.length -1

    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left ++
        right--
    }
    return arr;
}
console.log(reverseArr([1,3,2,5]))
