
//  car - rac  mam-mam
let isPalindrom = function(s){
   let lowerCase = s.toLowerCase()
   let main = lowerCase.replace(/[^a-zA-Z0-9]/g, '');
   let reversed = main.split("").reverse().join("")
   if(main === reversed){
    return true
   }else{
    return false;
   }
   

   
   
  
   

}
 
let s = "A man, a plan, a canal: Panama"
let t = "mam"
 console.log((isPalindrom(s)))
//  uppercase to lowercase
//  remove non alphanumeric
// reverse 


