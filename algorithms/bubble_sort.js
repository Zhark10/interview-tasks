const array = [1, 4, 5, 5, 3, 2, 4, 4, 345234, 456, 3, 32, 235, 45, 2, 123, -124, 36, -224]
let countOfIterations = 0

const bubbleSort = (data) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j] > data[j + 1]) {
        let tmp = data[j]
        data[j] = data[j + 1]
        data[j + 1] = tmp
      }
      countOfIterations += 1
    }
  }
  return data
}

console.log(bubbleSort(array))
console.log('COUNT', countOfIterations)
