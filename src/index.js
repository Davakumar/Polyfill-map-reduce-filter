// eslint-disable-next-line no-extend-native
Array.prototype.myMap = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i], i, this));
  }
  return newArray;
};

const values = [10, 20, 30, 40];

function multiple5(val) {
  return val * 5;
}

console.log(values.myMap(multiple5));

// eslint-disable-next-line no-extend-native
Array.prototype.myFilter = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const filterValues = [15, 20, 35, 40, 57];

const findOdd = (val) => {
  return val % 2 !== 0;
};

console.log(filterValues.myFilter(findOdd));

// eslint-disable-next-line no-extend-native
Array.prototype.myReduce = function (cb, acc) {
  let accumlator = acc;
  for (let i = 0; i < this.length; i++) {
    let newAcc = accumlator ? accumlator : this[i];
    accumlator = cb(newAcc, this[i], i, this);
  }
  return accumlator;
};

const reduceValues = [1, 2, 3, 4, 5];

const addAll = (acc, val) => {
  return acc + val;
};

console.log(reduceValues.myReduce(addAll));
