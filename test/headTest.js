const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(2, head([2,3,4]));
assertEqual("house", head(["house","apartment","condo"]));
assertEqual(undefined, head([]));