// простой map с двумя параметрами

const myFirstMap = (arr, cb) => {
  const resultArray = [];

  for (i = 0; i < arr.length; i++) {
    resultArray.push(cb(arr[i]));
  }

  return resultArray;
};

console.log(myFirstMap([12, 24, 35, 456], el => el * 2));

// как новый метод в прототипе Array

Array.prototype.myMap = function(cb) {
  const resultArray = []

  for (i=0; i < this.length; i++) {
    resultArray.push(cb(this[i]))
  }

  return resultArray
}

console.log([12, 24, 35, 456].myMap(el => el * 3));
