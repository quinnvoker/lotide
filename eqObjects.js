const eqObjects = (objectA, objectB) => {
  if (Object.keys(objectA).length !== Object.keys(objectB).length) {
    return false;
  }
  for (const key in objectA) {
    const valueA = objectA[key];
    const valueB = objectB[key];
    if (valueA !== valueB) {
      if (typeof valueA === 'object' && typeof valueB === 'object') {
        if (Array.isArray(valueA) && Array.isArray(valueB) && eqArrays(valueA, valueB)) {
          continue;
        } else if (!Array.isArray(valueA) && !Array.isArray(valueB) && eqObjects(valueA, valueB)) {
          continue;
        }
      }
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;