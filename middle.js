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


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

/*
  function middle(array):
    if array's length less than 3:
      return empty
    middleIndex = divide array length by two
    if middleIndex % 1 == 0:
      return [ array[middleIndex - 1], array[middleIndex] ]
    else:
      return [ array[Math.floor(middleIndex)]]
*/

const middle = (array) => {
  if (array.length < 3) {
    return [];
  }
  const middleIndex = array.length / 2;
  if (middleIndex % 1 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[Math.floor(middleIndex)]];
  }
};

const testEven = [1, 2, 3, 4];
const testOdd = [1, 2, 3, 4, 5];
const testShort = ['hello', 'world'];
assertArraysEqual(middle(testEven), [2, 3]);
assertArraysEqual(middle(testOdd), [3]);
assertArraysEqual(middle(testShort), []);
