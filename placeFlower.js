function flower(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      flowerbed[i] = 1;
      n = n - 1;
    }
  }
  if (n === 0) {
    return true;
  } else {
    return false;
  }
}
let flowerbed = [1, 0, 0, 0, 1];
let n = 2;
console.log(flower(flowerbed, n));
