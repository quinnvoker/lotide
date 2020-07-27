const expect = require('chai').expect;
const head = require('../head');

describe('#head', () => {
  it('should return 2 for [2]', ()  => {
    expect(head([2])).to.equal(2);
  });

  it('should return "house" for ["house","apartment","condo"]', () => {
    expect(head(["house","apartment","condo"])).to.equal('house');
  });

  it('should return undefined if given an empty array', () => {
    expect(head([])).to.be.undefined;
  });
});