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

/*
  function middle(array):
    if array's length less than 2:
      return empty
    middleIndex = divide array length by two
      if middleIndex % 1 == 0:
        return [ array[middleIndex - 1], array[middleIndex] ]
      else:
        return [ array[Math.floor[middleIndex]]]
*/
