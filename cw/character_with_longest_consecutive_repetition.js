const longestRepetition = s => s.split('').reduce((acc, el, i, init) => {
  (el === init[i - 1]) ? acc.currentStrike++ : acc.currentStrike = 1
  if (el !== init[i + 1]) {
    const maxStrike = Math.max(acc.currentStrike, acc.maxStrike)
    const isHigherThanMaxValue = acc.currentStrike > acc.maxStrike
    acc.maxStrike = maxStrike
    if (isHigherThanMaxValue) { 
      acc.resValue = [el, acc.currentStrike]
    }
  }
  return acc
}, {
  currentStrike: 0,
  maxStrike: 0,
  resValue: ["", 0]
}).resValue
