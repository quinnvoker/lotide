const eqObjects = require('../eqObjects');
const expect = require('chai').expect;

describe('eqObjects', () => {
  it('should return true if two objects contain the same properties', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    expect(eqObjects(ab, ba)).to.be.true;
  });
  it('should be able to handle arrays as properties', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    expect(eqObjects(cd, dc)).to.be.true;
  });
  it('should be ablet to handle nested objects', () => {
    const nestedObjA = { a: { b: "1"}, c: 2 };
    const nestedObjB = { c: 2, a: { b: "1"} };
    expect(eqObjects(nestedObjA, nestedObjB)).to.be.true;
  });
});