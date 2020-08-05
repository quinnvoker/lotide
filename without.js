const without = function(array, items) {
  let output = [];
  for (let element of array) {
    if (!contains(items, element)) {
      output.push(element);
    }
  }
  return output;
};

// I know I could have used Array.prototype.includes
// but I wanted a little extra practice :)
const contains = function(array, item) {
  for (let element of array) {
    if (element === item) {
      return true;
    }
  }
  return false;
};

module.exports = without;