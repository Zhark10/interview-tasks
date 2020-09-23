function ipsBetween(start, end){
  const _start = start.split('.').map((el, i, init) => 255 - el)
  const _end = end.split('.').map((el, i, init) => 255 - el)
  
  const calculated = _start.map((el, i) => el - _end[i])
  
  const res = calculated.reduce((acc, el, i, init) => {
    const increments = {
      0: init[0] * 256 * 256 * 256,
      1: init[1] * 256 * 256,
      2: init[2] * 256,
      3: init[3],
    }
    return acc + increments[i]
  }, 0)
  
  return res
}
