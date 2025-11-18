// function largestRectangleArea(heights) {
//   let stack = []; // index stack
//   let maxArea = 0;
//   heights.push(0);

//   for (let i = 0; i < heights.length; i++) {
//     while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
//       const height = heights[stack.pop()];
//       const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
//       console.log("width" + width)
//       const area = height * width;
//       maxArea = Math.max(maxArea, area);
//     }
//     stack.push(i);
//     console.log(stack)
//   }
//   //  stack [0,1,2] i = 3  height = 6  
//   return maxArea;
// }
// // let heights = [2, 1, 5, 6, 2, 3, 0];
// let heights = [2, 5, 6, 1];
// console.log(largestRectangleArea(heights))

let test = new Array(10).fill('m')
console.log(test)

