const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertArraysEqual(['hello', 'world'], ['hello', 'world']);
// assertArraysEqual([12, 36, 64], [12, 36, 64]);

module.exports = assertArraysEqual;