const flatten = (array) => {
  let output = [];
  if (!Array.isArray(array)) {
    return;
  }
  for (let element of array) {
    if (Array.isArray(element)) {
      let flatElement = flatten(element);
      for (let elm of flatElement) {
        output.push(elm);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};

module.exports = flatten;