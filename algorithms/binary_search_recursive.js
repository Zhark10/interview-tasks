const nums = Array.from(new Array(114534).keys())

let countOfIterations = 0
let index

const binarySearchRecursive = (arr, searchVal, start, end) => {
  countOfIterations++
  const middleIndex = Math.floor((start + end) / 2)
  if (arr[middleIndex] === searchVal) return middleIndex
  const range = searchVal < arr[middleIndex] ? [ start, middleIndex ] : [ middleIndex + 1, end ]
  return binarySearchRecursive(arr, searchVal, ...range)
}

console.log(binarySearchRecursive(nums, 1233, 0, nums.length))
console.log('COUNT', countOfIterations)
