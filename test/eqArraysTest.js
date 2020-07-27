const eqArrays = require('../eqArrays');
const expect = require('chai').expect;

describe('#eqArrays', () => {
  it('should return true if given two flat arrays with identical elements', () => {
    expect(eqArrays([1, 2, 3], [1, 2, 3])).to.be.true;
  });

  it('should return true if given nested arrays that are identical', () => {
    expect(eqArrays([[2, 3], [4]], [[2, 3], [4]])).to.be.true;
  });

  it('should return false if given arrays of different lengths', () => {
    expect(eqArrays([1, 2, 3], [1, 2, 3, 4])).to.be.false;
  });

  it('should return false if given non-matching arrays', () => {
    expect(eqArrays([1, 2, 3], [1, 2, 4])).to.be.false;
  });

  it('should return false if given non-matching nested arrays', () => {
    expect(eqArrays([1, [2, 3], 4], [1, [2, 4], 4])).to.be.false;
  });
});