//Naive

function hasPairWithSum(array, sum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

//Better

function hasPairWithSum2(array, sum) {
  const mySet = new Set();
  for (let i = 0; i < array.length; i++) {
    const difference = sum - array[i];
    if (mySet.has(difference)) {
      return true;
    }
    mySet.add(array[i]);
  }
  return false;
}

console.log(hasPairWithSum([6, 4, 9, 2, 1, 9], 9));
console.log(hasPairWithSum2([6, 4, 9, 2, 1, 9], 9));
