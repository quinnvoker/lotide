const flatten = require('../flatten');
const expect = require('chai').expect;

describe('flatten', () => {
  it('should return an array without nesting when given a nested array', () => {
    const origArray = [1, 2, [3, [4]], 5];
    const expectedArray = [1, 2, 3, 4, 5];
    expect(flatten(origArray)).to.deep.equal(expectedArray);
  });
  it('should return undefined if given anything other than an array', () => {
    expect(flatten(2)).to.be.undefined;
  });
});