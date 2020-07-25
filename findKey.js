const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};

const player = {
  hp: 31,
  mp: 50,
  exp: 4048,
  level: 10,
};

const meals = {
  breakfast: 'cereal',
  lunch: 'hotdog',
  dinner: 'steak',
};

const scores = {
  jim: 75,
  mary: 84,
  angela: 95,
  stewart: 99,
};

assertEqual(findKey(player, stat => stat % 10 === 0), 'mp');
assertEqual(findKey(meals, meal => meal === 'steak'), 'dinner');
assertEqual(findKey(scores, score => score > 90), 'angela');

module.exports = findKey;