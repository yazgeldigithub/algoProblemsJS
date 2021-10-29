const adjacentElementsProduct = (inputArray) => {
  let highestNum = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length; i++) {
    highestNum = Math.max(highestNum, inputArray[i - 1] * inputArray[i]);
  }
  return highestNum;
};

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
