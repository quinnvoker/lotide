const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
  function countLetters(string):
    result = {}
    for each character in string
      if result does not have character yet:
        set value of key [character] to 1
      else:
        increment value of key [character] by 1
    return result
*/

const countLetters = (string) => {
  const result = {};
  
  return result;
};

const testString = "Hello, my name is Quinn!";
const result = countLetters(testString);
assertEqual(result.Q, 1);
assertEqual(result.n, 3);
assertEqual(result.t, 0);