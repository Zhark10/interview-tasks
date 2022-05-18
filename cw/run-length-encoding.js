var runLengthEncoding = function(str){
  const strToArray = str.split('')
  const result = strToArray.reduce((acc, item, index, array)=>{
    if(index !== 0 && item === array[index - 1]) {
      acc[acc.length - 1] = [acc[acc.length - 1][0] + 1, acc[acc.length - 1][1]]
    } else {
      acc.push([1, item])
    }
    return acc
  }, [])
  
  return result
}
