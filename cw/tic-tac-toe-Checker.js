function isSolved(board) {
  const [X, O] = [1, 2]
  const gameCheck = symbol => {
    const firstRow = board[0]
    const otherRows = board.slice(1)
    
    const horizontalWinCheck = () => board.some(row => row.every(v => v === symbol))
    
    const verticalWinCheck = () => {
      let isVerticalWin = false
      for (let i = 0; i < firstRow.length; i++) {
        if (firstRow[i] !== symbol) continue
        if (otherRows.every(row => row[i] === symbol)) {
          isVerticalWin = true
        }
      }
      return isVerticalWin
    }
    
    const diagonalWinCheck = () => {
      let isDiagonalWin = false
      for (let i = 0; i < firstRow.length; i++) {
        const isFirst = i === 0
        const isLast = i === firstRow.length - 1
        if (!isFirst && !isLast) continue
          if (isFirst) {
            let j = 0
            const isWin = otherRows.every((row, index) => {
                j++
                return row[j] === symbol && row[j] === firstRow[0]
            })
            if (isWin) {
                isDiagonalWin = true
            }
          }
          if (isLast) {
            let j = firstRow.length - 1
            const isReverseWin = otherRows.every((row, index) => {
                j--
                return row[j] === symbol && row[j] === firstRow[firstRow.length - 1]
            })
            if (isReverseWin) {
                isDiagonalWin = true
            }
          }
      }
      return isDiagonalWin
    }
    
    const winCases = [verticalWinCheck, horizontalWinCheck, diagonalWinCheck]
    
    if (winCases.some(checkFunc => checkFunc())) {
      return symbol
    }
    return 0
  }
  
  if (gameCheck(X)) return X
  if (gameCheck(O)) return O
  
    if (board.some(row => row.includes(0))) {
      return -1
    } else {
      return 0
    }
}

const test = isSolved([[0,0,1],[0,1,2],[2,1,0]])
console.log(test)
