const assertEqual = require('./assertEqual');

const findKeyByValue = (object, value) => {
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const family = {
  father: 'Joe',
  mother: 'Corrine',
  child: 'Rowan',
};

assertEqual(findKeyByValue(family, "Joe"), "father");
assertEqual(findKeyByValue(family, "Rowan"), "child");

module.exports = findKeyByValue;