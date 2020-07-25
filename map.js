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
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//tests
const people = [
  {
    name: 'Jason',
    age: 3,
  },
  {
    name: 'Tom',
    age: 16,
  },
  {
    name: "Frieda",
    age: 24,
  }
];

assertArraysEqual(map(people, person => person.name), ['Jason', 'Tom', 'Frieda']);
assertArraysEqual(map([1, 2, 3], num => num * 5), [5, 10, 15]);
assertArraysEqual(map(['hello', 'world'], word => word.slice(0, 2)), ['he', 'wo']);

module.exports = map;