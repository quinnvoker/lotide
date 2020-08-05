const takeUntil = require('../takeUntil');
const expect = require('chai').expect;

describe('takeUntil', () => {
  it('should return an array containing values of a given array up until callback returns false', () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results = takeUntil(data, x => x === ',');
    const expected = [ "I've", "been", "to", "Hollywood"];
    expect(results).to.deep.equal(expected);
  });
});