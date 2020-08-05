const countOnly = require('../countOnly');
const expect = require('chai').expect;

describe('countOnly', () => {
  it('should return an object which contains the counts of each requested item', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    
    expect(result1["Jason"]).to.equal(1);
    expect(result1["Karima"]).to.be.undefined;
    expect(result1["Fang"]).to.equal(2);
  });
});