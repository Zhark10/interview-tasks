const nums = [2, 4, 4, 5, 3, 23, 4, 345, 23, 123, 4234, 45, 23, 12, -23, -34, -605]
let countOfIterations = 0

const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let minInd = i
        for (let j = i + 1; j < arr.length; j++) {
            // upd min index
            if (arr[j] < arr[minInd]) minInd = j
            // for logger
            countOfIterations++
        }
        // skip iteration
        if (arr[i] === arr[minInd]) continue
        // change positions
        let tmp = arr[i]
        arr[i] = arr[minInd]
        arr[minInd] = tmp
    }
    return arr
}

console.log(selectionSort(nums))
console.log('COUNT', countOfIterations)
