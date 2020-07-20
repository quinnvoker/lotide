const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
}

assertEqual(2, head([2,3,4]));
assertEqual("house", head(["house","apartment","condo"]));
assertEqual(undefined, head([]));