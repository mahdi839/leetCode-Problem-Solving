var nextGreaterElements = function(nums) {
    let stack = [];
    let validIncreasingNum = new Map();
    for(let num of nums){
        while(stack.length && num > stack[stack.length -1]){
            let prevNum = stack.pop();
            validIncreasingNum.set(prevNum,num)
        }
        stack.push(num)
    }
    return nums.map(num=>validIncreasingNum.get(num)??-1)
};

let nums = [3, 8, 4, 1, 2]
// result: 8, -1, 8, 2, 3
console.log(nextGreaterElements(nums))