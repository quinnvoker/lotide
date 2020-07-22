const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

/*
  function eqObjects(a, b):
    if a keys and b keys do not have the same length
      return false
    loop through a keys:
      if a key's value is different from b key
        return false
    return true
    
*/

const eqObjects = (objectA, objectB) => {
  if (Object.keys(objectA).length !== Object.keys(objectB).length) {
    return false;
  }
  for (let key of Object.keys(objectA)) {
    const valueA = objectA[key];
    const valueB = objectB[key];
    if (valueA !== valueB) {
      if (Array.isArray(valueA) && Array.isArray(valueB) && eqArrays(valueA, valueB)) {
        continue;
      }
      //TODO: add recursive case for nested objects
      return false;
    }
  }
  return true;
};


// primitive tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);


const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

// array tests

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
