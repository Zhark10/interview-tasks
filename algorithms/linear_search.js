const array = [1,4,3,5,2,3,4,52,5,6]

const linearSearch = (data, elementToSearch) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === elementToSearch) {
      return i
    }
    return null
  }
}

console.log(linearSearch(6))