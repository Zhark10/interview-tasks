const getStr = row => {   
  if (row.length === 1) {
    return row
  }
  
  const res = row.split('').reduce((acc, el, i, init) => {
    if (init[i + 1]) {
      const nextColor = (el === init[i + 1]) ? el : ['R','G','B'].find(color => color !== el && color !== init[i + 1])
      acc = `${acc}${nextColor}`
    }
    return acc
  }, '')
  
  return (row.length === 2) ? res : getStr(res)
}

const triangle = row => getStr(row)
