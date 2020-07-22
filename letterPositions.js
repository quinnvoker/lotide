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
  function letterPositions(string):
    result = {};
    for character in string (with index i)
      if result does not have character
        add [i] to character property
      else
        push i to character property
    return result
*/

const letterPositions = (string) => {
  const result = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!result[char]) {
      result[char] = [i];
    } else {
      result[char].push(i);
    }
  }
  return result;
};

const testString = 'hello';
const positions = letterPositions(testString);
assertArraysEqual(positions.h, [0]);
assertArraysEqual(positions.e, [1]);
assertArraysEqual(positions.l, [2, 3]);
assertArraysEqual(positions.o, [4]);