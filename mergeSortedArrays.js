function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}
console.log(mergeSortedArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
// [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
console.log(mergeSortedArrays([1, 3, 5, 8, 9, 10], [2, 3, 6, 8, 11]));
// [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
