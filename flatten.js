const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

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