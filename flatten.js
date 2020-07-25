const assertArraysEqual = require('./assertArraysEqual');

const flatten = (array) => {
  let output = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      let flatElement = flatten(element);
      for (let elm of flatElement) {
        output.push(elm);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};

assertArraysEqual(flatten([1, 2, [3, [4]], 5]), [1, 2, 3, 4, 5]);

module.exports = flatten;