// простой reduce с входящим массивом и колбеком

const myFirstReduce = (arr, cb, initialValue) => {
  let totalResult = initialValue;

  for (i = 0; i < arr.length; i++) {
    totalResult = cb(totalResult, arr[i], i, initialValue);
  }

  return totalResult;
};

console.log(
  myFirstReduce(
    [12, 24, 35, 456],
    (accumulator, currentIterationValue, currentIterationIndex, initialData) =>
      accumulator + currentIterationValue,
    10
  )
);

// reduce как метод Array

Array.prototype.myReduce = function (cb, initialValue) {
  let totalResult = initialValue;

  for (i = 0; i < this.length; i++) {
    totalResult = cb(totalResult, this[i], i, initialValue);
  }

  return totalResult;
};

console.log(
  [12, 24, 35, 456].myReduce(
    (accumulator, currentIterationValue, currentIterationIndex, initialData) =>
      accumulator + currentIterationValue,
    10
  )
);
