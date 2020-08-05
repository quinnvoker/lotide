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

module.exports = countLetters;