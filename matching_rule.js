items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]]
 let ruleKey = "type"
 let ruleValue = "phone"
 let count = 0;
items.forEach((item)=>{
   let index;
   if(ruleKey==='type')index=0
   else if(ruleKey == 'color') index = 1
   else if(ruleKey == 'name') index = 2

   if(item[index] === ruleValue){
      count++
   }

})
console.log(count)