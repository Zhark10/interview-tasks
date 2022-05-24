const nums = [2, 4, 4, 5, 3, 23, 4, 345, 23, 123, 4234, 45, 23, 12, -23, -34, -605]
let countOfIterations = 0

const quickSort = (arr) => {
    if (arr.length <= 1) return arr
    const middleIndex = Math.floor(arr.length / 2)
    const middle = arr[middleIndex]
    const [less, greater] = [[], []]
    for (let i = 0; i < arr.length; i++) {
        countOfIterations++
        if (middleIndex === i) continue
        const arrToAdd = arr[i] < middle ? less : greater
        arrToAdd.push(arr[i])
    }
    return [...quickSort(less), middle, ...quickSort(greater)]
}

console.log(quickSort(nums))
console.log('COUNT', countOfIterations)
