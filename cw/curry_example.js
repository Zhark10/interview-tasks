function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    }
    return function(...otherArgs) {
      return curried.apply(this, [...otherArgs, ...args])
    }
  }
}

const sum = (a, b, c) => {
return a + b + c
}

const curriedSum = curry(sum)

console.log(curriedSum(1)(2, 3))
