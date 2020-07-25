const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (array.length < 2) {
    return [];
  }
  return array.slice(1);
};


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = tail(words);
console.log(result);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

module.exports = tail;