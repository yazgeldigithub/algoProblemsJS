const adjacentElementsProduct = (inputArray) => {
  let highestNum = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length - 1; i++) {
    highestNum = Math.max(inputArray[i] * inputArray[i + 1]);
  }
  return highestNum;
};

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); //21
