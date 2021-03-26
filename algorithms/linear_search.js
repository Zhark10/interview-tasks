const array = [1,4,3,5,2,3,4,52,5,6]

let countOfIterations = 0
const linearSearch = (data, elementToSearch) => {
  for (let i = 0; i < data.length; i++) {
    countOfIterations += 1
    if (data[i] === elementToSearch) {
      return i
    }
  }
  return null
}

console.log(linearSearch(array, 6))
console.log('COUNT', countOfIterations)