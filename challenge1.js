function countTruthy (arr) {
  let count = 0
  let falseValues = [false, undefined, NaN, 0, '', null]
  for (i = 0; i < arr.length; i++) {
    if (!falseValues.includes(arr[i])) {
      count++
    }
  }
  return count;
}

