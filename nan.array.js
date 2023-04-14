function groupArray(arr, func) {
  const result = [];
  arr.forEach((val, index) => {
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(val);
  });
  return result.map(group => func(...group));
}

const originalArray = [1, 2, 3, 4, 5, 6];
const combinedArray = groupArray(originalArray, (a, b, c) => a + b + c);

console.log(combinedArray);
