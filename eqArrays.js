const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      if (Array.isArray(arrayA[i]) && Array.isArray(arrayB[i]) && eqArrays(arrayA[i], arrayB[i])) {
        continue;
      }
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;