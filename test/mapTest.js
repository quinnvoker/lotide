const map = require('../map');
const expect = require('chai').expect;

describe('map', () => {
  it('should return an array containing the returns of callback on each element of a given array', () => {
    const people = [
      {
        name: 'Jason',
        age: 3,
      },
      {
        name: 'Tom',
        age: 16,
      },
      {
        name: "Frieda",
        age: 24,
      }
    ];
    const expectedResult = ['Jason', 'Tom', 'Frieda'];
    expect(map(people, person => person.name)).to.deep.equal(expectedResult);
  });
});