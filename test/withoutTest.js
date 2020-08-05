const without = require('../without');
const expect = require('chai').expect;

const words = ["hello", "world", "lighthouse"];

describe('without', () => {
  it('should return an array without the given item in it', () => {
    expect(without(words, ["lighthouse", "world"])).to.deep.equal(["hello"]);
  });
  it('should not alter the original array', () => {
    without(words, ["lighthouse"]);
    expect(words).to.deep.equal(["hello", "world", "lighthouse"]);
  });
});