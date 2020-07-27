const tail = require('../tail.js');
const expect = require('chai').expect;

describe('#tail', () => {

  it('should return an array without the first element', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    expect(tail(words)).to.deep.equal(["Lighthouse", "Labs"]);
  });

  it('should not modify the length of the array it is given', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    expect(words.length).to.equal(3);
  });

  it('should return an empty array if given an array with less than 2 elements', () => {
    expect(tail([1])).to.deep.equal([]);
  });
});