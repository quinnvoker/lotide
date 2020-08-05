const findKeyByValue = require('../findKeyByValue');
const expect = require('chai').expect;

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('findKeyByValue', () => {
  it('should return the first key that contains a given value', () => {
    expect(findKeyByValue(bestTVShowsByGenre, "The Wire")).to.equal('drama');
  });
  it('should return undefined if object does not contain value', () => {
    expect(findKeyByValue(bestTVShowsByGenre, "Rugrats")).to.be.undefined;
  });
});