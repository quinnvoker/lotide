const letterPositions = (string) => {
  const result = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === " ") {
      continue;
    }
    if (!result[char]) {
      result[char] = [i];
    } else {
      result[char].push(i);
    }
  }
  return result;
};

module.exports = letterPositions;