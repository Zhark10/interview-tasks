const isPrime = n => {
  let limit = Math.sqrt(n)
  
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      return false
    }
  }
  
  return n >= 2
}

function solve(num){
  
  if (isPrime(num)) {return num}
  
  let res = 0
  let inc = num
  let dec = num
  
  while(!isPrime(inc) && !isPrime(dec)) {
    inc--
    dec++
    if (isPrime(dec)) {
      res = dec
    }
    if (isPrime(inc)) {
      res = inc
    }

  }
  
  return res
}
