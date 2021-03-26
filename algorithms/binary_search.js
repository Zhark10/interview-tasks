const array = Array.from(new Array(11454).keys())

let countOfIterations = 0
let index

const binarySearch = (data, elementToSearch) => {
  let startIndex = 0;
  let endIndex = data.length;
  let middleIndex;
  let found = false;
  let position = -1
  
  while (found === false && startIndex <= endIndex) {
    countOfIterations += 1
    middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (data[middleIndex] === elementToSearch) {
      found = true
      position = middleIndex
      return position
    }
    if (elementToSearch < data[middleIndex]) {
      endIndex = middleIndex - 1
    } else {
      startIndex = middleIndex + 1
    }
  }
  return 
}

console.log(binarySearch(array, 123))
console.log('COUNT', countOfIterations)
