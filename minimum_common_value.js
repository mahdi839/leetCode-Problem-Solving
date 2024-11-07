let minimumCommonvalue = function(nums1,nums2){
   let minCommon = Infinity;
   let set1 = new Set(nums1)

   for(let x of nums2){
      if(set1.has(x)){
            minCommon = Math.min(minCommon,x)
            // 2
      }
   }

   return minCommon === Infinity? -1:minCommon;
   
}

let nums1 = [2,3,4,5,5]
//  2,4
let nums2 = [1,2,4]

console.log(minimumCommonvalue(nums1,nums2))

// check  each numbers of the each array 
// search common min
// return if exists - otherwise return -1