const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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
  if (Object.keys(objectA).length != Object.keys(objectB).length) {
    return false;
  }
  for (let key of Object.keys(objectA)) {
    if (objectA[key] !== objectB[key]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);


const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
