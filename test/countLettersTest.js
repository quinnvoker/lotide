const countLetters = require('../countLetters');
const expect = require('chai').expect;

describe('countLetters', () => {
  it('should return an object containing the occurence count of all chars in a string', () => {
    const testString = "Hello, my name is Quinn!";
    const result = countLetters(testString);
    expect(result.Q).to.equal(1);
    expect(result.n).to.equal(3);
  });
});