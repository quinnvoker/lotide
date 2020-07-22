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

const eqObjects = (objectA, objectB) => {
  if (Object.keys(objectA).length != Object.keys(objectB).length) {
    return false;
  }
  for (let key of Object.keys(objectA)) {
    const valueA = objectA[key];
    const valueB = objectB[key];
    if (valueA !== valueB) {
      if(Array.isArray(valueA) && Array.isArray(valueB) && eqArrays(valueA, valueB)) {
        continue;
      }
      //TODO: add recursive case for nested objects
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) {

};