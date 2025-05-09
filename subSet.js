function subsets(nums) {
    const result = [[]];  // Start with the empty subset
    for (const num of nums) {
      const newSubsets = [];
  
      for (const subset of result) {
        newSubsets.push([...subset, num]);
        console.log('subset') // Add num to each existing subset
        console.log(subset)
      }
   
      result.push(...newSubsets);
      console.log('newSubsets') // Add num to each existing subset
      console.log(newSubsets)
      console.log('result') // Add num to each existing subset
      console.log(result)
    
    }
   [[],[1],]
    return result;
  }
  
  // Example usage:
 
  console.log(subsets([1, 2, 3]));



  