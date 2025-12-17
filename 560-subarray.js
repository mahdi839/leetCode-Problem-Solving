function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  let prefixSums = new Map();
  prefixSums.set(0, 1); // base case

  for (let num of nums) {
    sum += num;

    // check if (sum - k) was seen before
    if (prefixSums.has(sum - k)) {
      count += prefixSums.get(sum - k);
    }

    // store current sum frequency
    prefixSums.set(sum, (prefixSums.get(sum) || 0) + 1);
   
  }

  return count;
}
let nums = [1, 2, 3]
let k = 3

console.log(subarraySum(nums,k));