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
  function without(array, items to remove):
    output = []
    for element of array
      if !contains(items to remove, element)
        add element to output
    return output
        
  function contains(array, item):
    for element of array
      if element === item
        return true
    return false
*/

const without = function(array, items) {
  let output = [];
  for (let element of array) {
    if (!contains(items, element)) {
      output.push(element);
    }
  }
  return output;
};

// I know I could have used Array.prototype.includes
// but I wanted a little extra practice :)
const contains = function(array, item) {
  for (let element of array) {
    if (element === item) {
      return true;
    }
  }
  return false;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without(words, ["lighthouse", "world"]), ["hello"]);
assertArraysEqual(without([1, 2, 3, 4, 5], [1, 3, 5]), [2, 4]);
