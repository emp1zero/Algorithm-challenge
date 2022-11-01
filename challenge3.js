function sumMix (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    console.log(parseInt(arr[i]))
    sum += parseInt(arr[i]);
  }
  console.log(sum)
  return sum;
}
sumMix(['3',6,6,0,'5',8,5,'6'])