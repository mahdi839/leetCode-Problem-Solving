  var nextGreateElm = function (nums1, nums2) {
        let stack = [];
        let trackValidGreaterNum = new Map();
        for (let num of nums2){
            while(stack.length && stack[stack.length-1]<num){
                let smaller = stack.pop();
                trackValidGreaterNum.set(smaller,num)
            }
            stack.push(num)
        }
        console.log(trackValidGreaterNum)
        console.log(stack)
        return nums1.map(num=>trackValidGreaterNum.get(num)??-1)
    };


let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];
console.log(nextGreateElm(nums1, nums2))