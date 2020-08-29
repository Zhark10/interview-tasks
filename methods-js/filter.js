// простой фильтр с двумя параметрами

const myFirstFilter = (arr, cb) => {
  const resultArray = [];
  for (i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
};

console.log(myFirstFilter([13, 34, 56, 567], (el) => el > 500));

// как новый метод в прототипе Array

Array.prototype.myFilter = function (cb) {
  const resultArray = [];
  for (i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      resultArray.push(this[i]);
    }
  }
  return resultArray;
};

console.log([12, 24, 35].myFilter((el) => el === 35));
