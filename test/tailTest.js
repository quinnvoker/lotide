const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = tail(words);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");