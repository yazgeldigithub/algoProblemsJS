function twoSum(nums, target) {
  //Create an empty hash
  let hash = {};

  //Loop through nums
  for (let i = 0; i < nums.length; i++) {
    // assign new nums value to val at each iteration
    let val = nums[i];
    // set value as a hash key, and i as hash value
    hash[val] = i;

    // Printing out keys and values of our hash
    for (let i in hash) {
      console.log("Hash key is: " + i + " hash value is: " + hash[i]);
    }
  }

  /// iterate second time to find indices of sum of teo numbers that equals to our target
  for (let i = 0; i < nums.length; i++) {
    // We will subtract from target until we find potentialKey in our hash
    let potentialKey = target - nums[i];
    // If our hash has potentialKey and it's not equal to the same index, then return i and value of hash that is equal to potentialKey
    if (hash[potentialKey] && hash[potentialKey] !== i) {
      return [i, hash[potentialKey]];
    }
  }
}
// T: O(n)
// S: O(n)

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

function twoSum2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (nums.includes(diff) && nums.indexOf(diff) !== i) {
      return [i, nums.indexOf(diff)];
    }
  }
}

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));
console.log(twoSum2([3, 3], 6));
