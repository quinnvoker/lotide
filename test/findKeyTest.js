const findKey = require('../findKey');
const expect = require('chai').expect;

const player = {
  hp: 31,
  mp: 50,
  exp: 4048,
  level: 10,
};

describe('findKeyByValue', () => {
  it('should return the first key that causes the callback to return true', () => {
    expect(findKey(player, stat => stat % 10 === 0)).to.equal('mp');
  });
});