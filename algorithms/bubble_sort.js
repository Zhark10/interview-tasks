const nums = [1, 4, 5, 5, 3, 2, 4, 4, 345234, 456, 3, 32, 235, 45, 2, 123, -124, 36, -224]
let countOfIterations = 0

const bubbleSort = arr => {
  arr.forEach(() => {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let coppiedCurrentItem = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = coppiedCurrentItem
      }
      countOfIterations++
    }
  })
  return arr
}

console.log(bubbleSort(nums))
console.log('COUNT', countOfIterations)
