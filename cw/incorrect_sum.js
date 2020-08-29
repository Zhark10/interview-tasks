function add(num1, num2) {
    const separatedNum1 = String(num1).split('').reverse().map(el => +el)
    const separatedNum2 = String(num2).split('').reverse().map(el => +el)
    let remainder
    let calculatedPart

    const isFirstValueBigger = num1 > num2

    const biggerNumber = isFirstValueBigger ? num1 : num2
    const biggerArr = isFirstValueBigger ? separatedNum1 : separatedNum2
    const smallerArr = isFirstValueBigger ? separatedNum2 : separatedNum1
    
    calculatedPart = smallerArr.reduce((acc, _, currentIndex) => {
      const val = biggerArr[currentIndex] + smallerArr[currentIndex] 
      return `${val}${acc}`
    }, "")
    remainder = String(biggerNumber).split('').slice(0, biggerArr.length - smallerArr.length)
   
    return Number(`${remainder}${calculatedPart}`)
  }