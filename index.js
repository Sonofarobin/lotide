// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./mid')
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKeyByValue = require('./findKeyByValue');
const map = require('./map')


module.exports = { 
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  eqArrays,
  eqObjects,
  findKeyByValue,
  map

};