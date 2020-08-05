const letterPositions = require('../letterPositions');
const expect = require('chai').expect;

describe('letterPositions', () => {
  it('should return an object containing all characters in a given string and heir positions', () => {
    const testString = 'hello';
    const expectedResult = {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4]
    };
    expect(letterPositions(testString)).to.deep.equal(expectedResult);
  });
});