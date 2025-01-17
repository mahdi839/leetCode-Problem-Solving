
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict); // Convert the dictionary to a Set for O(1) lookups
    const dp = Array(s.length + 1).fill(false); // Create a DP array filled with false
    console.log(dp)
    dp[0] = true; // Base case: empty string is always segmentable
    console.log(dp)

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
          
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                console.log(dp)
                dp[i] = true;
                console.log(dp)
                break; // No need to check further if we already know it can be segmented
            }
        }
    }
    
    return dp[s.length];
};

// Example usage:
const s = "leetcode";
const wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict)); // Output: true
