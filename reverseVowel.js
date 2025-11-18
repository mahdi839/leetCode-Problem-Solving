var reverseVowels = function(s) {
    let vowels = 'aeiou';
    
    let result = ""
    let arr = s.split("")
        let left = 0;
        let right = arr.length-1;
        
        while(left<right){
           if(vowels.includes(arr[left].toLowerCase()) && vowels.includes(arr[right].toLowerCase())){
              [arr[left],arr[right] ]= [arr[right],arr[left]];
              left++
              right--
           }else if (vowels.includes(arr[left].toLowerCase()) && !vowels.includes(arr[right].toLowerCase())){
             right--
           }else{
             left++
           }
        }
    
    return  arr.join("")
    
};

let s = "IceCreAm"
console.log(reverseVowels(s))

