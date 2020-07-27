const middle = (array) => {
  if (array.length < 3) {
    return [];
  }
  const middleIndex = array.length / 2;
  if (middleIndex % 1 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[Math.floor(middleIndex)]];
  }
};

module.exports = middle;