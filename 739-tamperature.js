var dailyTemperatures = function (temperatures) {
    let stack = [];
    let result = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i)
    }
    return result;
};

let temperatures = [34, 80, 80, 34, 34, 80, 80, 80, 80, 34]
console.log(dailyTemperatures(temperatures))
