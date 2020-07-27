const middle = require('../middle');
const expect = require('chai').expect;

describe('#middle', () => {
  it('should return an array containing the middle element from an odd length array', () => {
    const testOdd = [1, 2, 3, 4, 5];
    expect(middle(testOdd)).to.deep.equal([3]);
  });

  it('should return an array containing the middle two elements from an even length array', () => {
    const testEven = [1, 2, 3, 4];
    expect(middle(testEven)).to.deep.equal([2, 3]);
  });

  it('should return an empty array when given an array with length < 3', () => {
    const testShort = ['hello', 'world'];
    expect(middle(testShort)).to.deep.equal([]);
  });
});