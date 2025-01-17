var shortestCompletingWord = function (licensePlate, words) {
    const target = licensePlate.toLowerCase().replace(/[^a-z]/g, "");
    console.log(target)
    return words.filter(word => {
        const wordLower = word.toLowerCase();
        return [...target].every(char => wordLower.includes(char));
    }).sort((a, b) => a.length - b.length)[0];
};

// Example Usage
let licensePlate = "1s3 PSt";
let words = ["step", "steps", "stripe", "stepple"];
console.log(shortestCompletingWord(licensePlate, words)); // Output: "step"
