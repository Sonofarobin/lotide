
const assert = require('chai').assert;
const middle = require('../mid');
const assertArraysEqual = require('../assertArraysEqual');


describe("#mid", () => {
  it("returns Lighthouse for [Yo yo, Lighthouse, Labs]", () => {
    assert.deepEqual(middle(["Yo yo", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });
  it("returns 4,5 for [1, 2, 3, 4, 5 , 6, 7, 8,]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [One thing]", () => {
    assert.deepEqual(middle(["One thing"]), []);
  });
});



