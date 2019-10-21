
const middle = require('../mid');
const assertArraysEqual = require('../assertArraysEqual');


console.log(middle(["Yo Yo", "Lighthouse", "Labs"]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(middle([1, 2]));
console.log(middle(["One Thing"]));

//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertArraysEqual(middle(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse"]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);

