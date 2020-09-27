const squares = n => n ? Array.from(Array(n).keys(), x => (x + 1)*(x + 1)) : []

const range = (n, start, step) => Array.from(Array(n).keys(), x => start + x * step)

const random = (n, min, max) => Array.from(Array(n).keys(), x => Math.round(Math.random() * (max - min) + min))

const primes = n => {
  if (!n) {return []}
  
  let arr = []
  let count = 2
  
  while(arr.length < n) {
    if(Array.from(Array(count).keys()).filter(el => el !== 1 && el !== count).every(x => count % x !== 0)) {
      arr.push(count)
    }
    count++
  }
  
  return arr
}
