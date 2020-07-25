const assertEqual = require('./assertEqual');

const countLetters = (string) => {
  const result = {};
  for (let char of string) {
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char]++;
    }
  }
  return result;
};

const testString = "Hello, my name is Quinn!";
const result = countLetters(testString);
assertEqual(result.Q, 1);
assertEqual(result.n, 3);
assertEqual(result.t, undefined);

module.exports = countLetters;