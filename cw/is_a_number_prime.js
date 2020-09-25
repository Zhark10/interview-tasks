const isPrime = n => {
  let limit = Math.sqrt(n)
  
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      return false
    }
  }
  
  return n >= 2
}
