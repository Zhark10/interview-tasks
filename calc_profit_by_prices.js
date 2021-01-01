function calc(arr) {
  const prices = [...arr];

  const { chunks } = prices.reduce(
    (currentState, currentPrice, index) => {
      const nextPrice = prices[index + 1];
      const isWillBeIncrease = currentPrice < nextPrice;
      if (isWillBeIncrease) {
        currentState.chunk.push(currentPrice);
      } else {
        const currentChunk = [...currentState.chunk, currentPrice];
        currentState.chunks.push(currentChunk);
        currentState.chunk = [];
      }
      return currentState;
    },
    { chunk: [], chunks: [] }
  );

  return chunks
    .filter(chunk => chunk.length > 1)
    .reduce((profit, currentChunk, index, pricesInChunk) => {
      console.log(currentChunk);
      let profitByChunk = 0;

      currentChunk.forEach((currentPriceInChunk, currentIndex) => {
        if (currentIndex > 0) {
          profitByChunk = profit + (currentPriceInChunk - currentChunk[0]);
        }
      });

      return profit + profitByChunk;
    }, 0);
}

const fakePrices_1 = [1, 2, 3, 4, 5, 6]; // 15
const fakePrices_2 = [1, 2, 3, 1, 4, 6]; // 11
const fakePrices_3 = [1, 6, 5, 10, 8, 7]; // 18

console.log(calc(fakePrices_1));
console.log(calc(fakePrices_2));
console.log(calc(fakePrices_3));
