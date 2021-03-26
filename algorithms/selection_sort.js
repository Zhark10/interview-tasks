const array = [2, 4, 4, 5, 3, 23, 4, 345, 23, 123, 4, 45, 23, 12, -23, -34, -65]
let countOfIterations = 0

const selectionSort = (data) => {
  for (let i = 0; i < data.length; i++) {

    let indexMin = i
    for (let j = i + 1; j < data.length; j++) {
      if(data[j] < data[indexMin]) {
        indexMin = j
      }
      countOfIterations += 1
    }
    let tmp = data[i]
    data[i] = data[indexMin]
    data[indexMin] = tmp
  }
  return array
}

console.log(selectionSort(array))
console.log('COUNT', countOfIterations)
