const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const testEven = [1, 2, 3, 4];
const testOdd = [1, 2, 3, 4, 5];
const testShort = ['hello', 'world'];
assertArraysEqual(middle(testEven), [2, 3]);
assertArraysEqual(middle(testOdd), [3]);
assertArraysEqual(middle(testShort), []);