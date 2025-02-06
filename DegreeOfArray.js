function findShortestSubArray(nums) {
    // Objects to record frequency and the first/last positions
    const counts = {};
    const firstOccurrence = {};
    const lastOccurrence = {};
    
    let degree = 0;
    
    // Traverse the array and update counts and occurrence indices.
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      
      // Record the first occurrence if not set.
      if (firstOccurrence[num] === undefined) {
        firstOccurrence[num] = i;
      }
      
      // Always update the last occurrence.
      lastOccurrence[num] = i;
      
      // Update the frequency.
      counts[num] = (counts[num] || 0) + 1;
      
      // Update the degree.
      degree = Math.max(degree, counts[num]);
    }
    
    // Now, find the minimum length for numbers that occur with 'degree' frequency.
    let minLength = nums.length;
    
    for (let num in counts) {
      if (counts[num] === degree) {
        // Calculate length of subarray for this number.
        const currentLength = lastOccurrence[num] - firstOccurrence[num] + 1;
        minLength = Math.min(minLength, currentLength);
      }
    }
    
    return minLength;
  }
  
  // Example usage:
  let nums = [1, 2, 2, 3, 1];
  console.log(findShortestSubArray(nums)); // Output: 2
  